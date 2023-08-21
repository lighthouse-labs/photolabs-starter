import React from "react";

// Styling
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const { title, handleTopicClick, id } = props;

  return (
    <div className="topic-list__item">
      <span id={id} onClick={handleTopicClick}> {title} </span>
    </div>
  );
};

export default TopicListItem;
