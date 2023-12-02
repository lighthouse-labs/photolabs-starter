import React, { useState } from "react";

import "../styles/PhotoListItem.scss";

const Typography = (props) => {
  const { topics, photos } = props;
  const categories = photos.filter((el) => el.id === topics.id);
  const categoriesList = categories.map((category) => {
    return <p key={topics.id}>{category}</p>;
  });
  return <li className="photo-list__item">{categoriesList}</li>;
};

export default Typography;
