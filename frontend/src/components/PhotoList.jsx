import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => { 
  return (
    <ul className="photo-list">
      {/* Insert React */}
    {props.photos.map((item) => <PhotoListItem key={item.id} sampleDataForPhotoListItem={item}  favourite={props.favourite} toggleFavourite={props.toggleFavourite} setSidePeek={props.setSidePeek} sidePeek={props.sidePeek} setSampleDataForPhotoListItem={props.setSampleDataForPhotoListItem} clickable={props.clickable} ></PhotoListItem>)}
    </ul>
  );
};

export default PhotoList;
