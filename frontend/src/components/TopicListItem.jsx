import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ onSelect, listItem }) => {
  return (
    <div onClick={() => onSelect(listItem.id)} className="topic-list__item">
      <span>{listItem.title}</span>
    </div>
  );
};

export default TopicListItem;
