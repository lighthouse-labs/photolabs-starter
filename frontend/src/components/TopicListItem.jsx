import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ listItem }) => {
  return <div className="topic-list__item">{listItem.title}</div>;
};

export default TopicListItem;
