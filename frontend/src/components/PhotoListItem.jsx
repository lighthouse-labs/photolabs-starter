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

const PhotoListItem = (props) => {
  console.log("props here", props)
  
  return (
    <div className="photo-list__item">
      <img src={props.sampleImage.imageSource} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.sampleImage.profile} className="photo-list__user-profile photo-list__user-details"/>
        <div>
          <h3 className="photo-list__user-info">{props.sampleImage.username}</h3>
          <h3 className="photo-list__user-location photo-list__user-info">{props.sampleImage.location.city}, {props.sampleImage.location.country}</h3>
        </div>
      </div>
    </div>
  )
};



//This below is okay, trying some stuff here
// const PhotoListItem = (props) => {
//   console.log("props here", props)
  
//   return (
//     <div className="photo-list__item">
//       <img src={props.sampleImage.imageSource} className="photo-list__image"/>
//       <img src={props.sampleImage.profile} className="photo-list__user-profile photo-list__user-details"/>
//       <h3 className="photo-list__user-info photo-list__user-details">{props.sampleImage.username}</h3>
//       <h3 className="photo-list__user-location photo-list__user-info">{props.sampleImage.location.city}, {props.sampleImage.location.country}</h3>
//     </div>
//   )
// };

export default PhotoListItem;
