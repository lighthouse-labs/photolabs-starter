import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ photoByTopic, topic }) => {

  return (
    <div className="topic-list__item">
     <div onClick={() => photoByTopic(topic.id)}>{ topic.title }</div> 
    </div>
  );
};

export default TopicListItem;
