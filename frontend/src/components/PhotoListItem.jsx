import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {id, location,  urls, user} = props.sampleDataForPhotoListItem;
  let src;
  let displayDetails;
    if(!props.Clickable) {
      src =  urls.full;
      displayDetails = "none";
    } else {
      src = urls.regular
      displayDetails = "true";
    }
   
    
  
  return(
    <div className="photo-list__item" key={id} >
      <PhotoFavButton photoId={id} favourite={props.favourite} toggleFavourite={props.toggleFavourite} ></PhotoFavButton>
      <img className="photo-list__image photo-details-modal--images" src={ src} onClick={() => {
        props.Clickable && props.setSidePeek(true);
        props.Clickable && props.setSampleDataForPhotoListItem(props.sampleDataForPhotoListItem)
        }} />

       <section className="photo-list__user-details">
        
        <img className="photo-list__user-profile" src={user.profile} alt=""></img>
        <section className="photo-list__user-info" >
          <h5 >{user.username}</h5>
          <h5 className="photo-list__user-location">{location.city}, {location.country}</h5>
        </section>
      </section>
    </div>
  );
};

export default PhotoListItem;
