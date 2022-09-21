import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOneBy: jest.fn((entity) => entity),
}));

describe('Article Service', () => {
  let articlesService: ArticlesService;
  let articleRepository: MockType<Repository<Article>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getRepositoryToken(Article),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    articlesService = module.get<ArticlesService>(ArticlesService);
    articleRepository = module.get(getRepositoryToken(Article));
  });

  test('Should return Article', async () => {
    const article = { id: 1, title: 'test', content: 'test' };
    articleRepository.findOneBy.mockReturnValue(article);
    expect(await articlesService.getArticleById(article.id)).toEqual(article);
    expect(articleRepository.findOneBy).toHaveBeenCalledWith({
      id: article.id,
    });
  });
});
