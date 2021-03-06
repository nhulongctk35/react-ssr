import React from 'react';

export default class Article extends React.PureComponent {
  render() {
    const article = this.props.data;
    return (
      <div className="article">
        <h2 className="article__title">{article.title}</h2>
        <span className="article__posted-date">{article.date}</span>
        <h3>
          By{' '}
          <a href="#">
            {this.props.author.firstName} {this.props.author.lastName}
          </a>
        </h3>
        <p className="article__content">{article.body}</p>
      </div>
    );
  }
}
