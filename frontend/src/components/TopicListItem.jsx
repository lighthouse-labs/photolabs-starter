import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({title}) => {
  return (
    <div className="topic-list__item">
      <h3>{title}</h3>
      
    </div>
  );
};

export default TopicListItem;
