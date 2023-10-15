import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div key={props.key} className="topic-list__item">
      <ul>{props.title}</ul>
    </div>
  );
};

export default TopicListItem;
