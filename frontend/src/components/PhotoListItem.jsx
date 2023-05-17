import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, imageSource, username } = props;
  return (
    <div key={id} className="photo-list--item">
      <img
        src={imageSource}
        alt={`${username}'s photo`}
        className="photo-list--image"
      />
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
