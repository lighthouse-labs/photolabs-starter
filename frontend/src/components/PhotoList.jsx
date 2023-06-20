import React from 'react';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, addFavPhoto, removeFavPhoto }) => {
  // Function to render individual photo items
  const renderPhotoItems = () => {
    return photos.map((photo, index) => (
      <PhotoListItem
        key={`${photo.id}_${index}`}
        username={photo.user.username}
        imageSource={photo.urls.regular}
        hideUsername={photo.hideUsername}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        id={photo.id}
      />
    ));
  };

  // Render the photo items inside a <div> element
  return <ul className='photo-list'> {renderPhotoItems()}</ul>;
};

export default PhotoList;
