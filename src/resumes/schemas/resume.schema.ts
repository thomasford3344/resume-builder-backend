import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as MongooseSchema } from 'mongoose';

export type ResumeDocument = HydratedDocument<Resume>;

// Define question schema without _id
const QuestionSchema = new MongooseSchema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

@Schema({ timestamps: true })
export class Resume {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  roleType: string;

  @Prop({ required: true })
  jobDescription: string;

  @Prop({
    required: false,
    enum: ['openai', 'claude'],
    default: 'openai',
  })
  aiModel?: string;

  @Prop({ required: false, default: 'gpt-4.1-mini' })
  aiVersion?: string;

  @Prop({ required: false })
  jsonFilePath?: string;

  @Prop({ required: false })
  conversationId?: string;

  @Prop({ 
    required: false,
    enum: ['in_progress', 'completed', 'failed'],
    default: 'in_progress'
  })
  status?: string;

  @Prop({ required: false })
  coverLetter?: string;

  @Prop({
    type: [QuestionSchema],
    default: [],
    required: false,
  })
  answers?: Array<{ question: string; answer: string }>;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
