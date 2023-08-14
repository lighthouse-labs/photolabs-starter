import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import photos from "../mocks/photos";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <PhotoListItem
          key={photoData.id}
          data={photoData}
          favoritedPhotoIds={props.favoritedPhotoIds}
          toggleFavorite={props.toggleFavorite}
          openModal={props.openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;