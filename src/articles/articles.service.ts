import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { ArticlesRepository } from './articles.repository';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async getAllArticles(): Promise<Article[]> {
    const articles = await this.articlesRepository.find();
    if (!articles) {
      throw new NotFoundException();
    }
    return articles;
  }
  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const { title, content } = createArticleDto;
    const article = this.articlesRepository.create({ title, content });
    await this.articlesRepository.save(article);
    return article;
  }

  async getArticleById(id: number): Promise<Article> {
    const article = await this.articlesRepository.findOneBy({ id });
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }
}
