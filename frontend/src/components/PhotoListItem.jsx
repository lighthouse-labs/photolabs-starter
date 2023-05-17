import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, imageSource, username } = props;
  return (
    <div key={id}>
      <img src={imageSource} alt={`${username}'s photo`} />
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: 1,
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  hideUserName: false,
};

export default PhotoListItem;
