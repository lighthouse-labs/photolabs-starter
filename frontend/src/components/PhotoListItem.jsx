import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo: { imageSource, username, profile, location: { city, country } } }) => {
  // const img = props.imageSource;
  // const name = props.username;
  // const profile = props.profile;
  // const city = props.location.city;
  // const country = props.location.country; 

  return (
    <div className="photo-list__item">
      {/* <h5>PhotoListItem Comp</h5> */}
      <img className="photo-list__image" src={imageSource} alt="Image" />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="Profile Image" />
        <div className="photo-list__user-info">{username}</div>
        <div className="photo-list__user-info photo-list__user-location">
          {`${city}, ${country}`}
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
