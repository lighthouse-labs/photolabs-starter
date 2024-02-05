import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favorite, toggleFavorite, displayModal, updateDisplayModal }) => {
  return (
    <ul className="photo-list">
      {/* {photos.map((photo) => (
        <PhotoListItem  
        photo={photo} key={photo.id} 
        favorite={favorite} 
        toggleFavorite={toggleFavorite} 
        updateDisplayModal={updateDisplayModal}/>
      ))} */}

      {displayModal ? (<PhotoListItem photo={displayModal}
        favorite={favorite} toggleFavorite={toggleFavorite} />) : (photos.map(photo => {
          return <PhotoListItem key={photo.id} photo={photo}
            toggleFavorite={toggleFavorite}
            favorite={favorite}
            updateDisplayModal={updateDisplayModal}
            modalState />
        }))}
    </ul>
  );
};

export default PhotoList;
