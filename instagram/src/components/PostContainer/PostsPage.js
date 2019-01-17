import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostsContainer';

class PostsPage extends Component {
    constructor() {
        super();
        this.state= {
            posts: [],
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
            <SearchBar 
            searchTerm={this.state.searchTerm}
            searchPosts={this.searchPostsHandler}
            />
    
            <PostContainer dummyData={this.state.filteredPosts.length > 0 ?
            this.state.filteredPosts :
            this.state.dummyData
            
          }
          />
            
    
          </div>
    
        );
      }
    
}

export default PostsPage;
