import React, {useState} from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoList = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState()
  
  const photoList = props.photos.map((photo) =>
    <PhotoListItem 
      key = {photo.id}
      sampleImage={photo}
      onClickPhoto={setCurrentPhoto}
      isLiked={props.likedPhotos.includes(photo.id)}
      handleButtonClick={() => props.handleButtonClick(photo.id)}
    />
  )

  return (
    <>
      <ul className="photo-list">
        {photoList}
      </ul>
      {currentPhoto && 
      <PhotoDetailsModal 
      onClose={() => setCurrentPhoto(undefined)} 
      photo={currentPhoto}
      likedPhotos={props.likedPhotos}
      handleButtonClick={props.handleButtonClick}
      />}
    </>
  );
};


export default PhotoList;