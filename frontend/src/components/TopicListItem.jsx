import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title } = props;

  return (
    <div className="topic-list--item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
