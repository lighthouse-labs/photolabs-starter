import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite, isFavorite }) => {

const { urls:{ full, regular }, user, location: { city, country }, id } = photo;
const { name, profile } = user;

  return (
    <div className="photo-list__item">
      {/* <h5>PhotoListItem Comp</h5> */}

      <PhotoFavButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} id={id}/>

      <img className="photo-list__image" src={`${full}`} alt="Image" onClick={() => updateDisplayModal}/>
      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={`${profile}`} alt="Profile Image" />
        <div className="photo-list__user-info">{`${name}`}</div>
        <div className="photo-list__user-info photo-list__user-location">
          {`${city}, ${country}`}
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;


