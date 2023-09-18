import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  photos,
  selectedPhotoHandler,
  isFavourite,
  setModalHandler,
  setClickedPhoto,
  similarPhotos
}) => {
  // console.log('similarPhotos :', similarPhotos);
  //consitionally rendering the similar photos when the modal is open
  let displayPhotos = similarPhotos ? similarPhotos : photos;

  const photo = displayPhotos.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          photo={photo}
          isFavourite={isFavourite}
          selectedPhotoHandler={selectedPhotoHandler}
          setClickedPhoto={setClickedPhoto}
          setModalHandler={setModalHandler}
        />
      </li>
    );
  });

  return <ul className="photo-list">{photo}</ul>;
};

export default PhotoList;
