import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Increase timeout for long-running requests (like resume generation)
  const server = await app.listen(process.env.PORT ?? 3000);
  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
  server.timeout = 120000; // 2 minutes
  server.keepAliveTimeout = 120000;

}
bootstrap();
