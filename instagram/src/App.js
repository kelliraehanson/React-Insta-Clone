import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostsContainer';
import dummyData from './components/dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }

  render() {

    return (

      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>

    );
  }
}

export default App;