import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = ({ photos, topics, toggleModal, favoritedPhotoIds, toggleFavorite}) => {
 
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favoritedPhotoIds={favoritedPhotoIds}/>
      <PhotoList 
        photos={photos} 
        favoritedPhotoIds={favoritedPhotoIds} 
        toggleFavorite={toggleFavorite}
        toggleModal={toggleModal}/>
   </div>
  )
}

export default HomeRoute;