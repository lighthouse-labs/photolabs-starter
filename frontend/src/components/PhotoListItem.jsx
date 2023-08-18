import React from "react";
import "../styles/PhotoListItem.scss";
// import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton.jsx";



const PhotoListItem = (props) => {

  const { handlePhotoClick, photoListStyle, imagesStyle, photos, photoID, favPhotos, isAFavPhoto, addFavourite, removeFavourite, favPhotosExist, openModal } = props;

  return (
    <div className={photoListStyle}>  
      <PhotoFavButton 
        photoID={photoID}
        favPhotos={favPhotos}
        isAFavPhoto={isAFavPhoto}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        favPhotosExist={favPhotosExist}
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
    

  )

};

export default PhotoListItem;
