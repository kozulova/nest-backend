import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
// import { ArticlesRepository } from './articles.repository';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [TypeOrmModule.forFeature([Article])],
})
export class ArticlesModule {}
