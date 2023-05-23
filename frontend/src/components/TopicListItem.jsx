import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title } = props;

  return (
    <div className="topic-list--item">
      <a href={`/api/topics/photos/1`}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
