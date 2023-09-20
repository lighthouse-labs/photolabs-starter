import React from 'react';

const LikedPhotosView = ({ favoritedPhotos, photos }) => {
  // Filter the liked photos using the IDs in favoritedPhotos
  const likedPhotosList = photos.filter(photo => favoritedPhotos.includes(photo.id));

  return (
    <div>
      <h2>Liked Photos</h2>
      <div>
        {likedPhotosList.map(photo => (
          <div key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
            <p>{photo.description || 'No description'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedPhotosView;