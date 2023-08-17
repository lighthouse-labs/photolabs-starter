import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {id, location,  urls, user} = props.sampleDataForPhotoListItem;
  
  return(
    <div className="photo-list__item" key={id} >
      <PhotoFavButton photoId={id} favourite={props.favourite} toggleFavourite={props.toggleFavourite} ></PhotoFavButton>
      <img className="photo-list__image photo-details-modal--images" src={ urls.regular} onClick={() => {
        props.setSidePeek(true);
        props.setSampleDataForPhotoListItem(props.sampleDataForPhotoListItem)
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
