import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { liked, toggleLike, toggleModal, photos } = props; 

  const printPhotos = photos.map((data) => (
    <li key={data.id}>
      <PhotoListItem 
      sampleDataForPhotoListItem={data} 
      isLiked={liked.includes(data.id)}
      toggleLike={() => toggleLike(data.id)}
      toggleModal={() => { toggleModal(data)}}
      />
    </li>
  ));

  return <ul className="photo-list">{printPhotos}</ul>;
};

export default PhotoList;