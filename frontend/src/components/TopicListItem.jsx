import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div
      className="topic-list--item"
      onClick={() => props.selectTopic(props.id)}
    >
      {/* <a
        href={`http://localhost:8001/api/topics/photos/${props.id}`}
        rel="noreferrer"
        target="_blank"
      > */}
      <span>{props.title}</span>
      {/* </a> */}
    </div>
  );
};

export default TopicListItem;
