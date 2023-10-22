import React from 'react';

import '../styles/TopNavigationBar.scss';
import darkModeSymbol from '../assets/darkModeSymbol.svg';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import SearchBar from './SearchBar';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} setCurrentTopic={props.setCurrentTopic}/>
      <SearchBar setSearchTerm={props.setSearchTerm}/>
      <div className="top-nav-bar__dark-mode-symbol">
        <img src={darkModeSymbol} alt="dark mode symbol"/>
      </div>
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} displayFavorites={props.displayFavorites} showFavorites={props.showFavorites}/>
    </div>
  );
};

export default TopNavigation;