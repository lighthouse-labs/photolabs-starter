import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // const onSelectPhoto = () => {
  //   props.dispatch({
  //     type: "SELECT_PHOTO",
  //     payload: props.id,
  //   });
  // };

  return (
    <div key={props.id} className={`${props.imageContainerClassName}`}>
      <PhotoFavButton
        photoId={props.id}
        favouritePhotos={props.favouritePhotos}
        dispatch={props.dispatch}
        id={props.id}
        isFavourite={props.isFavourite}
      />
      <img
        src={props.imageSource}
        alt={`${props.username}'s photo`}
        className={props.imageClassName}
        onClick={props.openModal}
      />

      <div className="photo-list--user-details">
        <img
          src={props.thumbnail}
          alt={props.username}
          className="photo-list--user-profile"
        />
        <div className="photo-list--user-info">
          <span>{props.username}</span>
          <br />
          <span className="photo-list--user-location">
            {props.city}, {props.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
