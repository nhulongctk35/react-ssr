import React, { PureComponent } from 'react';
import Article from './article';

export default class ArticleList extends PureComponent {
  render() {
    return (
      <div>
        <h2>Article list</h2>
        <div>
          {Object.values(this.props.articles).map(article => (
            <Article
              author={this.props.getAuthorDetail(article.authorId)}
              key={article.id}
              data={article}
            />
          ))}
        </div>
      </div>
    );
  }
}
