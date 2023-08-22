import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <span className="topic-list__item">
      <span onClick={() => {props.get_photo_by_topics(props.id)}}>
        {props.title}
      </span>
    </span>
  );
};

export default TopicListItem;
