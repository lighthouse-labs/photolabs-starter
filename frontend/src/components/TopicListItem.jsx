import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
       <a href={props.title}>{props.title}</a>
    </div>
  );
};

export default TopicListItem;

