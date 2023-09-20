import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = ({ photos, topics, togglePhotoModal, favoritedPhotoIds, toggleFavoritePhoto, topicSelect}) => {
 
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favoritedPhotoIds={favoritedPhotoIds}
        topicSelect={topicSelect}
        />
      <PhotoList 
        photos={photos} 
        favoritedPhotoIds={favoritedPhotoIds} 
        toggleFavoritePhoto={toggleFavoritePhoto}
        togglePhotoModal={togglePhotoModal}
        />
   </div>
  )
}

export default HomeRoute;