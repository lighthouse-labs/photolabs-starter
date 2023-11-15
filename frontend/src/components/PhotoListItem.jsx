import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = () => {
  const { id, location, user } = props.data;
  const { regular, profile } = props.data.urls;

  return (
    <div className="photo-list-item">
      <img src={regular} alt={`Photo by ${user.username}`} />
      <h3>{`Photo ${id}`}</h3>
      <p>{`Location: ${location.city}, ${location.country}`}</p>
      <p>{`Uploaded by: ${user.username}`}</p>
      <img src={profile} alt={`${user.username}'s profile`} />
    </div>
  );
};

export default PhotoListItem;
