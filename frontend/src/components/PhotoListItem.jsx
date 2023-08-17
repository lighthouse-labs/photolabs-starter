import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


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
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.sampleImage.urls.regular} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.sampleImage.user.profile} className="photo-list__user-profile photo-list__user-details"/>
        <div>
          <h3 className="photo-list__user-info">{props.sampleImage.user.username}</h3>
          <h3 className="photo-list__user-location photo-list__user-info">{props.sampleImage.location.city}, {props.sampleImage.location.country}</h3>
        </div>
      </div>
    </div>
  )

//Code from before Building PhotoList activity
// const PhotoListItem = (props) => {  
//   return (
//     <div className="photo-list__item">
//       <PhotoFavButton />
//       <img src={props.sampleImage.imageSource} className="photo-list__image"/>
//       <div className="photo-list__user-details">
//         <img src={props.sampleImage.profile} className="photo-list__user-profile photo-list__user-details"/>
//         <div>
//           <h3 className="photo-list__user-info">{props.sampleImage.username}</h3>
//           <h3 className="photo-list__user-location photo-list__user-info">{props.sampleImage.location.city}, {props.sampleImage.location.country}</h3>
//         </div>
//       </div>
//     </div>
//   )
};

export default PhotoListItem;
