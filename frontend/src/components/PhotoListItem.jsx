import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton.jsx";


const PhotoListItem = (props) => {

  const { favCount, handlePhotoClick, photoListStyle, imagesStyle, photoID, favPhotosArray, isAFavPhoto, addFavourite, removeFavourite, favPhotosExist } = props;

  return (
    <div className={photoListStyle}>

      <PhotoFavButton
        photoID={photoID}
        favPhotosArray={favPhotosArray}
        isAFavPhoto={isAFavPhoto}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        favPhotosExist={favPhotosExist}
        favCount={favCount}
      />
      
      <img className={imagesStyle} alt="Image" src={props.imageSource} id={photoID} onClick={handlePhotoClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" alt="Profile Image" src={props.profile} />
        <span className="photo-list__user-info">
          {props.name} <br/>
          <span className="photo-list__user-location"> {props.city}, {props.country}  </span>
        </span>
      </div>
    </div>
  );
};


export default PhotoListItem;
