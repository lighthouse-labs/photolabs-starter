import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ title, id, fetchPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(id)}>
      <h3>{title}</h3>
    </div>
  );
};

export default TopicListItem;
