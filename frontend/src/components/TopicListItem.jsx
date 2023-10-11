import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  return (
    <div className="topic-list__item">
      <span onClick={() => props.showTopicPhotos(props.id)} 
      className={props.darkMode ? "topic-list__item-dark-mode" :"topic-list__item" }>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
