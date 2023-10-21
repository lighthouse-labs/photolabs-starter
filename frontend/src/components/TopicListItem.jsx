import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <ul className={props.id}>{props.title}</ul>
    </div>
  );
};

export default TopicListItem;
