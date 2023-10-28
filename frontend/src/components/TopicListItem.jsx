import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topicListItem topic-list__item">
      <span className="label topic-list__item span"> {props.title} </span>
    </div>
  );
};

export default TopicListItem;
