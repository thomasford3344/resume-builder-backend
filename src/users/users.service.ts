import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { Model, QueryFilter } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    await createdUser.save();
    // Return user without password
    return this.userModel.findById(createdUser._id).select('-password').exec();
  }

  async find(query: QueryFilter<User>) {
    return this.userModel.findOne(query).exec();
  }

  async findAll() {
    return this.userModel.find().select('-password').exec();
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id).select('-password').exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Update fields
    if (updateUserDto.email !== undefined) {
      user.email = updateUserDto.email;
    }
    if (updateUserDto.name !== undefined) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.password !== undefined) {
      user.password = updateUserDto.password; // Will be hashed by pre-save hook
    }
    if (updateUserDto.role !== undefined) {
      user.role = updateUserDto.role;
    }
    if (updateUserDto.template !== undefined) {
      user.template = updateUserDto.template;
    }
    if (updateUserDto.instructions !== undefined) {
      user.instructions = updateUserDto.instructions;
    }
    if (updateUserDto.questionsPrompt !== undefined) {
      user.questionsPrompt = updateUserDto.questionsPrompt;
    }

    // Save to trigger pre-save hook (which will hash password if modified)
    await user.save();

    // Return user without password using select
    return this.userModel.findById(id).select('-password').exec();
  }

  async delete(id: string) {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: `User with ID ${id} has been deleted` };
  }

  async updateProfile(id: string, updateUserDto: Partial<UpdateUserDto> & { currentPassword?: string; newPassword?: string }) {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Validate current password if changing password
    if (updateUserDto.newPassword) {
      if (!updateUserDto.currentPassword) {
        throw new BadRequestException('Current password is required to change password');
      }
      const isCurrentPasswordValid = await bcrypt.compare(updateUserDto.currentPassword, user.password);
      if (!isCurrentPasswordValid) {
        throw new BadRequestException('Current password is incorrect');
      }
      user.password = updateUserDto.newPassword; // Will be hashed by pre-save hook
    }

    // Only allow updating specific fields for profile
    if (updateUserDto.name !== undefined) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.template !== undefined) {
      user.template = updateUserDto.template;
    }
    if (updateUserDto.instructions !== undefined) {
      user.instructions = updateUserDto.instructions;
    }
    if (updateUserDto.questionsPrompt !== undefined) {
      user.questionsPrompt = updateUserDto.questionsPrompt;
    }

    await user.save();

    // Return user without password
    return this.userModel.findById(id).select('-password').exec();
  }
}
