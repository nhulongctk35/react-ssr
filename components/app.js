import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Staring ReactJS</h2>
        <p>git remote add origin git@github.com:nhulongctk35/react-ssr.git</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
