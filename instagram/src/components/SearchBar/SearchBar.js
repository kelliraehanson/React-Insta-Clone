import React from 'react';
import './SearchBar.css';


const SearchBar = props => {

      return (

        <div className="SearchBar">


        <div className="logoImage"><i class="fab fa-instagram"></i></div>

        {/* <div className="instaSearchbar"><a href="https://www.instagram.com">Instagram</a></div> */}

        <div className="instaSearchbar">Instagram</div>

        <div className="search"><input type="text" placeholder="Search" onKeyPress={props.searchPosts}/></div>
       
    

        <div className="icons">

        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i></div>
         
        </div>

      );
    
  }
  
  export default SearchBar;

//   {/* Search bar with icons and input type */}
  