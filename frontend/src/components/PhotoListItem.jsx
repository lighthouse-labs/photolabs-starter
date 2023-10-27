import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const handlePhotoClick = () => {
    console.log("picture", props)
    console.log('MODAL STATE', props.state)
    props.dispatch({ type: 'SHOW_MODAL', payload: props })

  }

  return (
    <div className="photoListItem photo-list__item">
      <PhotoFavButton 
        id={props.id} 
        liked={props.liked}
        setLiked={props.setLiked}
        favList={props.favList}
        setFavList={props.setFavList}
        showModal={props.showModal}
        addFavPhoto={props.addFavPhoto}
        removeFavPhoto={props.removeFavPhoto}
        displayModal={props.displayModal}
        reducer={props.reducer}
        dispatch={props.dispatch}
        state={props.state}

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
