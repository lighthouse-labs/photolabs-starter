import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  /* Insert React */

  const { sampleDataForPhotoListItem, isLiked, toggleLike, toggleModal } = props;

  return (
  <div className="photo-list__item">
    <div className="photo-list__div">
      <PhotoFavButton isLiked={isLiked} toggleLike={toggleLike}/>
      <img 
      className="photo-list__image" 
      src={sampleDataForPhotoListItem.urls.regular} 
      onClick={toggleModal}/>
    </div>
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.user.profile} />
      <div className="photo-list__user-info-layout">
      <span  className="photo-list__user-info ">{sampleDataForPhotoListItem.user.username}</span>
      <span  className="photo-list__user-location"> {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</span>
    </div>
    </div>
  </div>
  );
};

export default PhotoListItem;
