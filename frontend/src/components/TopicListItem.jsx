import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id, slug, title} = props;
  return (
    <div className="topic-list__item">
      <span onClick={() => props.setCurrentTopic(id)}>{title}</span>
      {/* Insert React */}
    </div>
  );
};

export default TopicListItem;
