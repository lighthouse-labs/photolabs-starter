import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

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
