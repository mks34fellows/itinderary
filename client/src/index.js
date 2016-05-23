import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Options from './components/options';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOptions: {
        location: ''
      }
    };
  }
  //obj will come in form of this.state.searchOptions
  setSearch(obj) {
    this.setState({ searchOptions: obj })
  }

  render() {
    return (
      <div>
        <Options setSearch={ obj => this.setSearch(obj) } />
        Location: { this.state.searchOptions.location }
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));