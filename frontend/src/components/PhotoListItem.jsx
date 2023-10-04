import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = () => {
  return (
    <div>
      <img src={sampleDataForPhotoListItem.imageSource} alt="" />
      <img src={sampleDataForPhotoListItem.profile} alt="" />
      <p>
      {sampleDataForPhotoListItem.username}
      </p>
      <p>{sampleDataForPhotoListItem.location.city} {sampleDataForPhotoListItem.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
