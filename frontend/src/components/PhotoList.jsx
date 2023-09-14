import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        console.log(photo);
        return (
          <li key={photo.id}>
            <PhotoListItem photoData={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
