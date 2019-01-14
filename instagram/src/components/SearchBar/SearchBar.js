import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {

    render() {

      return (

        <div className="SearchBar">

        <div className="logoImage"><i class="fab fa-instagram"></i></div>

        <div className="line">|</div>

        <div className="instaSearchbar">Instagram</div>

        <input 
        value="search"
        type="search"
        placeholder="Search"

        />

        <div className="icons">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i></div>
         
        </div>

      );
    }
  }
  
  export default SearchBar;
  