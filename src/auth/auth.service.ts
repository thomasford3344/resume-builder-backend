import { Injectable, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { UserDocument } from 'src/users/schemas/user.schema';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    // console.log("email: ", email)
    const user = await this.usersService.find({ email });

    // Generating password
    // const salt = await bcrypt.genSalt(10);
    // const password = await bcrypt.hash("JINjinge627~", salt);
    // console.log("password: ", password);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        template: user.template,
      };
    }
    return null;
  }

  async login(user: Exclude<UserDocument, 'password'>) {
    const payload = { _id: user._id, email: user.email };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.usersService.find({
      email: registerDto.email,
    });
    if (existingUser) {
      throw new ConflictException('Email is already registered');
    }

    const user = await this.usersService.create({
      email: registerDto.email,
      name: registerDto.name,
      password: registerDto.password,
      role: 'user',
    });

    if (!user) {
      throw new ConflictException('Failed to create user');
    }

    return this.login(user);
  }
}
