import React from 'react';
import ArticleList from './articles/article-list';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Staring ReactJS</h2>
        <p>git remote add origin git@github.com:nhulongctk35/react-ssr.git</p>
        <ArticleList />
      </React.Fragment>
    );
  }
}

export default App;
