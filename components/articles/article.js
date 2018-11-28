import React from 'react';

export default class Article extends React.PureComponent {
  render() {
    const article = this.props.data;
    return (
      <React.Fragment>
        <h2>{article.title}</h2>
        <span>{article.date}</span>
        <p>{article.body}</p>
      </React.Fragment>
    );
  }
}
