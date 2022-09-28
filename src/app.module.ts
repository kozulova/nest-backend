import { ConfigModule, ConfigService } from '@nestjs/config';

import { ArticlesModule } from './modules/articles/articles.module';
import { HealthCheckController } from './healthcheck.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShutdownService } from './shutdown.service';
import { typeOrmAsyncConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ArticlesModule,
  ],
  controllers: [HealthCheckController],
  providers: [ShutdownService],
})
export class AppModule {}
