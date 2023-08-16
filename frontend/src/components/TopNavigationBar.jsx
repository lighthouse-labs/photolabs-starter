import React from 'react';

// Styling
import '../styles/TopNavigationBar.scss'

// Components
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const { topics, favPhotos, favPhotosExist } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__right'>
        
        <TopicList 
          topics={topics} 
        />

        <FavBadge 
          favPhotos={favPhotos}
          favPhotosExist={favPhotosExist}
        />     
      </div>   
    </div>
  )
}

export default TopNavigation;