import React, {useState} from 'react';
import HomeRoute from './HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../App.scss';
import useApplicationData from '../hooks/useApplicationData';

export default function Application(props) {
  const {
    isModalVisible,
    setModalVisible,
    selectedPhotoData,
    setSelectedPhotoData,
    favoritedPhotoIds,
    setFavoritedPhotoIds,
    openModal,
    closeModal,
    toggleFavorite
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute openModal={openModal} closeModal={closeModal} isModalVisible={isModalVisible} favoritedPhotoIds={favoritedPhotoIds} setFavoritedPhotoIds={setFavoritedPhotoIds} toggleFavorite={toggleFavorite}/>
      {isModalVisible && <PhotoDetailsModal closeModal={closeModal} isModalVisible={isModalVisible} selectedPhotoData={selectedPhotoData} favoritedPhotoIds={favoritedPhotoIds} setFavoritedPhotoIds={setFavoritedPhotoIds} toggleFavorite={toggleFavorite}/>}
    </div>
  );
}