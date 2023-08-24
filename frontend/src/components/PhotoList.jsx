import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => { 
  return (
    <ul className="photo-list">
    {props.photos.map((item) => <PhotoListItem key={item.id} sampleDataForPhotoListItem={item}  favourite={props.favourite} toggleFavourite={props.toggleFavourite} setSidePeek={props.setSidePeek} sidePeek={props.sidePeek} setSampleDataForPhotoListItem={props.setSampleDataForPhotoListItem}   setSidePeekForLikedPhotos={props.setSidePeekForLikedPhotos}></PhotoListItem>)}
    </ul>
  );
};

export default PhotoList;
