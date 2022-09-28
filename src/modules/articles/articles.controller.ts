import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {
    this.articlesService = articlesService;
  }
  @Get()
  getAllArticles(): Promise<Article[]> {
    return this.articlesService.getAllArticles();
  }
  @Get('/:id')
  getArticleById(@Param('id') id: number): Promise<Article> {
    return this.articlesService.getArticleById(id);
  }
  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.createArticle(createArticleDto);
  }
  @Delete('/:id')
  deleteArticle(@Param('id') id: number): Promise<void> {
    return this.articlesService.deleteArticleById(id);
  }
  @Patch('/:id')
  updateArticle(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.updateArticle(id, updateArticleDto);
  }
}
