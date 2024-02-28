import React from "react";
import "../styles/SearchBar.scss";

const SearchBar = (props) => {


  const handleInput = (e) => {
    props.setSearchInput(e.target.value);
  };


  return (
    <section className="search">
      <input className="search__input" type="text" placeholder="Search" onChange={handleInput} value={props.searchInput}>
      </input>
    </section>
  );


};

export default SearchBar;