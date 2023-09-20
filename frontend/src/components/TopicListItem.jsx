import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, link, topicSelect }) => {
  return (
    <div className="topic-list__item" onClick={() => topicSelect(link)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
