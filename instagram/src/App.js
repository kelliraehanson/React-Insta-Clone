import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostsContainer';
import dummyData from './components/dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPosts: [],
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: dummyData });
  }

  render() {

  return ( 

      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.filteredPosts.length > 0 ?
        this.state.filteredPosts :
        this.state.dummyData
        
      }
      />
        

      </div>

    );
  }
}

export default App;


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dummyData: dummyData,
//     };
//   }
//   // {/* ^ getting data stored in state */}

//   render() {

//   // {/* this is what is visible on the app */}

//   return ( 

//       <div className="App">
//         <SearchBar />
//         <PostContainer dummyData={this.state.dummyData} />
//       </div>

//     );
//   }
// }

// export default App;