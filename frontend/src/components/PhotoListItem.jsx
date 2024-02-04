import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData: { urls:{ full, regular }, user, location: { city, country } } }) => {
const name = user.name;
const profile = user.profile; 
// const fullUrl = urls.full;


  return (
    <div className="photo-list__item">
      {/* <h5>PhotoListItem Comp</h5> */}

      <PhotoFavButton />

      <img className="photo-list__image" src={`${full}`} alt="Image" />
      
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


