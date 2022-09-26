import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ShutdownService } from './shutdown.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.get(ShutdownService).subscribeToShutdown(() => app.close());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
