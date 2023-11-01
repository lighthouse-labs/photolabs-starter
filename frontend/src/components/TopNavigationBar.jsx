import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import ThemeButton from './ThemeButton';

const TopNavigationBar = ({
  topics,
  favourites,
  getTopicId,
  selectedTopic,
  themeToggler,
  darkTheme
}) => {
  return (
    <div className={darkTheme ? 'top-nav-bar dark' : 'top-nav-bar'}>
      <span className={darkTheme ? 'top-nav-bar__logo dark' : 'top-nav-bar__logo'}>PhotoLabs</span>
      <TopicList
        topics={topics}
        getTopicId={getTopicId}
        selectedTopic={selectedTopic}
        darkTheme={darkTheme}
      />
      <FavBadge favourites={favourites} />
      <ThemeButton themeToggler={themeToggler} darkTheme={darkTheme} />
    </div>
  );
};

export default TopNavigationBar;
