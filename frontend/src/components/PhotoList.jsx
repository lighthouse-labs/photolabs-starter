import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  photos,
  toggleFavourites,
  openModal,
  similarPhotos,
  favourites,
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
        />
      </li>
    );
  });

  return <ul className="photo-list">{photo}</ul>;
};

export default PhotoList;
