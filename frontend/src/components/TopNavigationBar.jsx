import React, { useState } from "react";
import TopicList from "./TopicList";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const [searchText, setSearchText] = useState("");

function search() {
  props.onSearch(searchText);

}
const onChange =(e)=> {
setSearchText(e.target.value);
}

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div>
        <input type="text" placeholder="search" value={searchText} onChange={onChange} />
        <button onClick={search}>Search</button>
      </div>

      <TopicList
        topics={props.topics}
        handleImageFetch={props.handleImageFetch}
      />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
