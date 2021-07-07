import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default authenticate(App)(Login);


// import React, { Component } from 'react';
// import './App.css';
// import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostsContainer';
// import dummyData from './components/dummy-data';
// // import PostsPage from './components/PostContainer/PostsPage';
// // import LoginPage from './components/Login/Login';
// // import authenticate from './components/Authentication/authenticate';


// // class App extends Component {
// //   constructor() {
// //     super();
// //     this.state = {};
// //   }

// //   render() {
// //     return (
// //       <div className="App">
// //       <PostsPage />
// //       </div>
// //     );
// //   }
// // }

// // export default authenticate(App)(LoginPage);


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dummyData: [],
//       filteredPosts: [],
//     };
//   }

//   componentDidMount() {
//     this.setState({ dummyData: dummyData });
//   }

//   searchPostsHandler = e => {
//     const posts = this.state.posts.filter(p => {
//       if (p.username.includes(e.target.value)) {
//         return p;
//       }
//     });
//     this.setState({ filteredPosts: dummyData });
//   }

//   render() {

//   return ( 

//       <div className="App">
//         <SearchBar 
//         searchTerm={this.state.searchTerm}
//         searchPosts={this.searchPostsHandler}
//         />

//         <PostContainer dummyData={this.state.filteredPosts.length > 0 ?
//         this.state.filteredPosts :
//         this.state.dummyData
        
//       }
//       />
        

//       </div>

//     );
//   }
// }

// export default App;


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