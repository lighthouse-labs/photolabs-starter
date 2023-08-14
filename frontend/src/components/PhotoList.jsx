import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photoListData.map((element) => {
        return (
          <PhotoListItem 
          key={element.id}
          imageSource={element.urls.regular} 
          imageSourceFull={element.urls.full}
          profile={element.user.profile}
          name={element.user.name}
          userName={element.user.username}
          city={element.location.city}
          country={element.location.country}
          />
        )
      })}

    </ul>
  );
};

export default PhotoList;
