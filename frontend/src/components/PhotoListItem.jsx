import React from "react";

import "../styles/PhotoListItem.scss";



const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = ({username, imageSource, id, location, profile}) => { 
  return (
  <div className="photo-list-item">
<div className="photo-username">
<img src={imageSource} alt={`photo ${id}`} className="main-photo" />
<img src={profile} alt={`${username} profile`} className="profile-photo" />
</div>
<span>{username}</span>
<div className="photo-location">
{location.city}, {location.country}
</div>
  </div>
  );
};



export default PhotoListItem;
