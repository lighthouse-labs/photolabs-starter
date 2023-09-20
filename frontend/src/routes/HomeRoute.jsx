import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = ({ openModal, photos, topics, favoritedPhotos, setFavoritedPhotos, updateToFavPhotoIds, fetchPhotosByTopic }) => {
  
  return (
    <div className="home-route">
    <TopNavigationBar 
    topics={topics} 
    favoritedPhotos={favoritedPhotos}
    fetchPhotosByTopic={fetchPhotosByTopic} 
    />

    <PhotoList 
    photos={photos} 
    topics={topics}
    favoritedPhotos={favoritedPhotos} 
    setFavoritedPhotos={setFavoritedPhotos} 
    openModal={openModal}
    updateToFavPhotoIds={updateToFavPhotoIds}
    />
    </div>
  );
};

export default HomeRoute; 

