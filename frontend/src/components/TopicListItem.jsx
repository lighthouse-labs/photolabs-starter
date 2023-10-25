import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, handleTopicSelect }) => {
  const onTopicClick = () => {
  handleTopicSelect(id);
 }
  return (
    <div className="topic-list__item" onClick={onTopicClick}>
      <a className={id} >{title}</a>
    </div>
  );
};

export default TopicListItem;
