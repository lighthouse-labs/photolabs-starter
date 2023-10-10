import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  console.log("HomeRoute render");
  console.log("HomeRoute Props:", props);

  
  return (
    <div className="home-route">
      <div className='top-nav-bar'>
        <TopNavigation homePhotos={props.homePhotos}/>
        <TopicList topicData={props.topicData} showTopicPhotos={props.showTopicPhotos} />
        <FavBadge isFavPhotoExist={props.isFavPhotoExist()} favourites={props.favourites}/>
      </div>
      <PhotoList setShowModal={props.setShowModal} favourites={props.favourites} toggleFavourite={props.toggleFavourite} setSelectedImage={props.setSelectedImage}  photoData={props.photoData}/>
    </div>
  );
};

export default HomeRoute;
