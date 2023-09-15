import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, selectedPhoto, isFavourite }) => {
  const clickHandler = (photoId) => {
    selectedPhoto(photoId);
  };
  const photoData = photos.map((photo) => {
    // const isSelected = isFavourite(photo.id);
    return (
      <li key={photo.id}>
        <PhotoListItem
          photoData={photo}
          selectedPhoto={selectedPhoto}
          isFavourite={isFavourite(photo.id)}
          onClick={() => {
            clickHandler(photo.id);
          }}
        />
      </li>
    );
  });

  return <ul className="photo-list">{photoData}</ul>;
};

export default PhotoList;
