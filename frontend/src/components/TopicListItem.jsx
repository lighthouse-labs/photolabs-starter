import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  return (
    <div className="topic-list__item">
      <div className="topic-label">{topic.title}</div>
    </div>
  );
};

export default TopicListItem;
