import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  photos,
  toggleFavourites,
  openModal,
  similarPhotos,
  favourites,
  darkTheme
}) => {
  let displayPhotos = similarPhotos ? similarPhotos : photos;

  const photo = displayPhotos.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          photo={photo}
          photoId={photo.id}
          toggleFavourites={toggleFavourites}
          openModal={openModal}
          favourites={favourites}
          darkTheme={darkTheme}
        />
      </li>
    );
  });

  return <ul className={darkTheme ? 'photo-list dark' : 'photo-list'}>{photo}</ul>;
};

export default PhotoList;
