import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photoData }) => {
  const { imageSource, location, username, profile } = photoData;

  return (
<article className='photo-list__item'>
<PhotoFavButton />
    <img
        src={imageSource}
        alt={`Photo taken in ${location.city}, ${location.country}`}
        className='photo-list__image'
    />
    
    <footer className='Photo-footer'>
        <div className='photo-list__user-details'>
            <img
                src={profile}
                alt={`${username}'s profile`}
                className='photo-list__user-profile'
            />
            <div>
                <h2 className='photo-list__user-info'>{username}</h2>
                <p className='photo-list__user-location'>
                    {location.city}, {location.country}
                </p>
            </div>
        </div>
    </footer>
</article>
  );
};

export default PhotoListItem;
