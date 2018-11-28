import React, { Component } from 'react';
import ArticleService from './../../services/article.service';
import Article from './article';
const data = require('../../mock-data/test-data');

const articleService = new ArticleService(data.data);

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articleService.getArticles(),
      authors: articleService.getArticles(),
    };
  }

  render() {
    return (
      <div>
        <h2>Article list</h2>
        <div>
          {Object.values(this.state.articles).map(article => (
            <Article key={article.id} data={article} />
          ))}
        </div>
      </div>
    );
  }
}
