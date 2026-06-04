import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResumesService } from './resumes.service';
import { ResumesController } from './resumes.controller';
import { ResumesGateway } from './resumes.gateway';
import { Resume, ResumeSchema } from './schemas/resume.schema';
import { User, UserSchema } from '../users/schemas/user.schema';
import { UsersModule } from '../users/users.module';
import { OpenAIModule } from '../openai/openai.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resume.name, schema: ResumeSchema },
      { name: User.name, schema: UserSchema },
    ]),
    UsersModule,
    OpenAIModule,
  ],
  providers: [ResumesService, ResumesGateway],
  controllers: [ResumesController],
})
export class ResumesModule {}
