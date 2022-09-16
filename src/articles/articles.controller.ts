import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

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
    console.log(id, 'id');
    return this.articlesService.getArticleById(id);
  }
  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    console.log(createArticleDto, 'createArticleDto');
    return this.articlesService.createArticle(createArticleDto);
  }
}
