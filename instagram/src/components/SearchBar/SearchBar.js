import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {

    render() {

      return (

        <div className="SearchBar">

        <i class="fab fa-instagram"></i>

        <div className="instaSearchbar">Instagram</div>

        <i class="far fa-compass"></i>

        <i class="far fa-heart"></i>

        <i class="far fa-user"></i>
         
        </div>

      );
    }
  }
  
  export default SearchBar;
  