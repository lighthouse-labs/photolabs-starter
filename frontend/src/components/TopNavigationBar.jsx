import React from 'react';

// Styling
import '../styles/TopNavigationBar.scss';

// Components
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigationBar = (props) => {

  const { handleShowFavsClick, handleAllClick, handleTopicClick, topics, favPhotos, favPhotosExist } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__right'>
        
        <TopicList
          topics={topics}
          handleTopicClick={handleTopicClick}
          handleAllClick={handleAllClick}
        />

        <FavBadge
          favPhotos={favPhotos}
          favPhotosExist={favPhotosExist}
          handleShowFavsClick={handleShowFavsClick}
        />
      </div>
    </div>
  );
};


export default TopNavigationBar;