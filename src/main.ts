import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ShutdownService } from './shutdown.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Articles example')
    .setDescription('The articles API description')
    .setVersion('1.0')
    .addTag('articles')
    .setBasePath('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableShutdownHooks();
  app.get(ShutdownService).subscribeToShutdown(() => app.close());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
