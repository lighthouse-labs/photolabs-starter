import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const img = props.imageSource;
  const name = props.username;
  const profile = props.profile;
  const city = props.location.city;
  const country = props.location.country; 

  return (
    <div>
      <h1>PhotoListItem Comp</h1>
      <img src={img} alt="Image" />
      <img src={profile} alt="Profile Image" />
      <h5>{name}</h5>
      <h5>{`${city}, ${country}`}</h5>
    </div>
  );
  
};

export default PhotoListItem;
