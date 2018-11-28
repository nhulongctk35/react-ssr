import ArticleService from '../article.service';
import articleMockData from '../../mock-data/test-data';

const articleService = new ArticleService(articleMockData.data);

describe('Article service', () => {
  it('has article data', function() {
    const articles = articleService.getArticles();
    const keys = Object.keys(articles);
    const articleId = articles[keys[0]].id;
    const articleTitle = articles[keys[0]].title;

    expect(articleId).not.toBeNull();
    expect(articleTitle).not.toBeNull();
    expect(articles[keys[0]]).toHaveProperty('id');
  });
});
