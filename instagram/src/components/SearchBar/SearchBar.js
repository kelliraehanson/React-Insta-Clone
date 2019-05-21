import React from 'react'
import './SearchBar.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 20px 0;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
`;

const InstaLogo = styled.img`
    width: 150px;
    height: auto;
`;

const Center = styled.div `
    text-align: center;
    input {
        background: rgb(243, 243, 243);
        &:: placeholder {
            text-align: center;
        }
    }
`;

const Right = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 30%;
`;

const SearchBar = props => {
    return (

        <Header>
            <Left>
                <i className="fab fa-instagram fa-3x"></i>
                <InstaLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' alt="insta" />
            </Left>
            <Center>
                <form className="searchForm">
                    <input 
                        className="searchBox" 
                        type='text' 
                        placeholder='&#x1F50D; Search' 
                        onChange={props.handleSearch}
                        value={props.searchText}
                    />
                </form>
            </Center>
            <Right>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i onClick={props.logout} className="far fa-user fa-2x"></i>
            </Right>
        </Header>
    )
};

export default SearchBar;


// import React from 'react';
// import './SearchBar.css';

// const SearchBar = props => {

//       return (

//         <div className="SearchBar">

//         <div className="logoImage"><i class="fab fa-instagram"></i></div>

//         {/* <div className="instaSearchbar"><a href="https://www.instagram.com">Instagram</a></div> */}

//         <div className="instaSearchbar">Instagram</div>

//         <div className="search"><input type="text" placeholder="Search" onKeyPress={props.searchPosts}/></div>

//         <div className="icons">

//         <i class="far fa-compass"></i>
//         <i class="far fa-heart"></i>
//         <i class="far fa-user"></i></div>
         
//         </div>

//       );
//   }
  
//   export default SearchBar;
  