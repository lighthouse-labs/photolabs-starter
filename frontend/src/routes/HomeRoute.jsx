import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [selectedCount, setSelectedCount] = useState(0)
  
  return (
    <div className="home-route">
      <div className='top-nav-bar'>
        <TopNavigation />
        <TopicList/>
        <FavBadge isFavPhotoExist={selectedCount}/>
      </div>
      <PhotoList setSelectedCount={setSelectedCount}/>
    </div>
  );
};

export default HomeRoute;
