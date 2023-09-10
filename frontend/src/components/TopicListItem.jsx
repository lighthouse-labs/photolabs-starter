import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({title, slug}) => {
  return (
    <div className="topic-list__item">
      <h3>{title}</h3>
      <p>{slug}</p>
    </div>
  );
};

export default TopicListItem;
