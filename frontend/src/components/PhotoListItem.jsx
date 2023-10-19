import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const handlePhotoClick = () => {
    props.setShowModal(props)
  }

  return (
    <div className="photoListItem photo-list__item" onClick={handlePhotoClick} >
      <PhotoFavButton 
        id={props.id} 
        favList={props.favList}
        setFavList={props.setFavList}
      />
      <img className="image photo-list__image" src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="profile photo-list__user-profile" src={props.profile}></img>
        <div className="photo-list__user-info">
          <p className="username"> {props.username} </p>
          <p className="location photo-list__user-location"> {props.city}, {props.country} </p>
        </div>
      </div>
    </div>
  )
};


export default PhotoListItem;
