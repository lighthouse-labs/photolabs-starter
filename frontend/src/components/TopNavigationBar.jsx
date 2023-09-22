import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const isAnyPhotoFavorited = props.favoritedCount > 0;

  const handleTopicClick = (topicId) => {
    // Call the onSelectTopic function passed from props
    if (props.onSelectTopic) {
      props.onSelectTopic(topicId);
    }
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <span className='nav-topics'>
          <TopicList onSelectTopic={handleTopicClick} />
        </span>
        <span className='nav-fav'>
          <FavBadge isAnyPhotoFavorited={isAnyPhotoFavorited} displayAlert={true} />
        </span>
        <span className='nav-fav-count'>{props.favoritedCount}</span>
      </div>
    </div>
  );
};

export default TopNavigation;
