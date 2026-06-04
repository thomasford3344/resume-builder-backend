import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodError, ZodType } from 'zod';

export class ZodValidationPipe<T = unknown> implements PipeTransform {
  constructor(private schema: ZodType<T>) {}

  transform(value: unknown, metadata: ArgumentMetadata): T {
    if (metadata.type === 'body' || metadata.type === 'query') {
      try {
        return this.schema.parse(value);
      } catch (error) {
        if (error instanceof ZodError) {
          throw new BadRequestException(error.flatten());
        }
        throw new BadRequestException('Validation failed');
      }
    }
    return value as T;
  }
}
