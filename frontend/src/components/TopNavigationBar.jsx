import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import SearchBar from './SearchBar';
import DarkModeIcon from './DarkModeIcon';

const TopNavigation = (props) => {
  const { toggleDarkMode, darkMode } = props;
  return (
    <div className={`top-nav-bar${darkMode ? '-dark-mode' : ''}`}>
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} setCurrentTopic={props.setCurrentTopic} darkMode={darkMode}/>
      <SearchBar setSearchTerm={props.setSearchTerm}/>
      <DarkModeIcon toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} displayFavorites={props.displayFavorites} showFavorites={props.showFavorites}/>
    </div>
  );
};

export default TopNavigation;