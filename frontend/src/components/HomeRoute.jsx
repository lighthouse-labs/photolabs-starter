import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = ({ photos, topics, toggleModal}) => {
  const [favoritedPhotoIds, setFavoritedPhotoIds] = useState([])

  const toggleFavorite = (photoId) => {
    if (favoritedPhotoIds.includes(photoId)) {
      const newFavoritedPhotoIds = favoritedPhotoIds.filter(id => id !== photoId);
      setFavoritedPhotoIds(newFavoritedPhotoIds);
    } else {
      const newFavoritedPhotoIds = [...favoritedPhotoIds, photoId];
      setFavoritedPhotoIds(newFavoritedPhotoIds);
    }
  };

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