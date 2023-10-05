import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
console.log("photoListItem Props: ", props);


  return (
    <div className="photo-list__item">
      <PhotoFavButton favourites={props.favourites} toggleFavourite={props.toggleFavourite} id={props.id}/>
      <img className="photo-list__image" src={props.imageSource} alt="User image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="Profile" />
        <div className="photo-list__user-info">{props.name}
          <div 
          className="photo-list__user-location">{props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

