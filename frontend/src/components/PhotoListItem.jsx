import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photoListData}) => {
  return (
    <article>
      <img src={photoListData.imageSource} />
      <img src={photoListData.profile} />
      <p>{photoListData.username}</p>
      <p>
        {photoListData.location.city},{" "}
        {photoListData.location.country}
      </p>
    </article>
  );
};

export default PhotoListItem;
