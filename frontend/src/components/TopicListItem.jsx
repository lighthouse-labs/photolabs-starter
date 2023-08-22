import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <span className="topic-list__item">
      <span>
        {props.title}
      </span>
    </span>
  );
};

export default TopicListItem;
