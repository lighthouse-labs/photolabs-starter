import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = ({ photos, topics}) => {
  const [favoritedPhotoIds, setFavoritedPhotoIds] = useState([])

  const toggleFavorite = (photoId) => {
    if (favoritedPhotoIds.includes(photoId)) {
      const newFavoritedPhotoIds = favoritedPhotoIds.filter(id => id !== photoId);
      setFavoritedPhotoIds(newFavoritedPhotoIds);
      console.log("Updated favoritedPhotoIds:", newFavoritedPhotoIds);
    } else {
      const newFavoritedPhotoIds = [...favoritedPhotoIds, photoId];
      setFavoritedPhotoIds(newFavoritedPhotoIds);
      console.log("Updated favoritedPhotoIds:", newFavoritedPhotoIds);
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
        toggleFavorite={toggleFavorite}/>
   </div>
  )
}

export default HomeRoute;