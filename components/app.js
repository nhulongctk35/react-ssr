import React from 'react';
import ArticleList from './articles/article-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      authors: {},
    };
  }

  asyncFunction = () => {
    return Promise.resolve(48);
  };

  async componentDidMount() {
    const value = await this.asyncFunction();
    console.log(value);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Staring ReactJS</h2>
        <p>git remote add origin git@github.com:nhulongctk35/react-ssr.git</p>
        <ArticleList articles={this.state.articles} />
      </React.Fragment>
    );
  }
}

export default App;
