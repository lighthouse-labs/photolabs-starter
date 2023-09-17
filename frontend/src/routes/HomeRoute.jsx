import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
// import photos from 'mocks/photos';

const HomeRoute = ({ selectedPhoto, setSelectedPhoto, openModal, favPhotos, setFavPhotos, photos }) => {
  
  const isFavPhotoExist = favPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
        openModal={openModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
