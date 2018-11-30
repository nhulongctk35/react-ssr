import React from 'react';
import { articleService } from './../services';
import ArticleList from './articles/article-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      authors: {},
    };
  }

  async componentDidMount() {
    await articleService.fetchArticle();
    this.setState(() => ({
      articles: articleService.getArticles(),
      authors: articleService.getAuthors(),
    }));
  }

  getAuthorDetail = authorId => {
    return this.state.authors[authorId] || {};
  };

  render() {
    return (
      <React.Fragment>
        <h2>Staring ReactJS</h2>
        <p>git remote add origin git@github.com:nhulongctk35/react-ssr.git</p>
        <ArticleList
          articles={this.state.articles}
          getAuthorDetail={this.getAuthorDetail}
        />
      </React.Fragment>
    );
  }
}

export default App;
