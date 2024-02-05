import React, { useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const HomeRoute = ({ photos, topics, updateDisplayModal, favorite, toggleFavorite }) => {

  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} favorite={favorite} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favorite={favorite} updateDisplayModal={updateDisplayModal} />
    </div>
  );
};

export default HomeRoute;