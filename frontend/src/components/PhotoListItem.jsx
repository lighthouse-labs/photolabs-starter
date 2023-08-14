import React from "react";
import "../styles/PhotoListItem.scss";
// import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton.jsx";



const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">  
      <PhotoFavButton />    
      <img className="photo-list__image" alt="image" src={props.imageSource} />
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
