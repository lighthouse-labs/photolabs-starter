import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  const { imageSource, location, username, profile } = photoData;

  return (
    <article className='Photo'>
      <img 
        src={imageSource}
        alt={`Photo taken in ${location.city}, ${location.country}`}
        className='Main-photo'
      />
      
      <footer className='Photo-footer'>
        <div className='Profile-section'>
          <img 
            src={profile}
            alt={`${username}'s profile`}
            className='Profile-pic'
          />
          <h2 className='Username'>{username}</h2>
          <p>{location.city}, {location.country}</p>
        </div>
      </footer>
    </article>
  )
};

export default PhotoListItem;
