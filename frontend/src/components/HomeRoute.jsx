import React, {useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  
  const {favoritedPhotoIds, toggleFavorite} = props;

  return (
    <div className="home-route">
      <TopNavigationBar favoritedCount={favoritedPhotoIds.length} favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}/>
      <PhotoList favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite} openModal={props.openModal} closeModal={props.closeModal} isModalVisible={props.isModalVisible}/>
    </div>
  );
};

export default HomeRoute;