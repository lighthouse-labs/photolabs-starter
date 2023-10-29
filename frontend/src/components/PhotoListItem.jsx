import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { dispatch } = props;

  //enables modal window to appear upon clicking photo
  const handlePhotoClick = () => {
    dispatch({ type: 'SHOW_MODAL', payload: props })
  };

  return (
    <div className="photoListItem photo-list__item">
      <PhotoFavButton 
        id={props.id} 
        liked={props.liked}
        favList={props.favList}
        setFavList={props.setFavList}
        showModal={props.showModal}
        dispatch={props.dispatch}
        state={props.state}
        photoData={props.photoData}
      />
      <img className="photo-list__image" src={props.imageSource} onClick={handlePhotoClick} ></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}></img>
        <div className="photo-list__user-info">
          <p> {props.username} </p>
          <p className="photo-list__user-location"> {props.city}, {props.country} </p>
        </div>
      </div>
    </div>
  )
};


export default PhotoListItem;
