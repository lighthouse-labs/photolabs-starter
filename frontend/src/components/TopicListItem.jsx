import React from "react";

import "../styles/TopicListItem.scss";

 ;

const TopicListItem = ({topicItem: {title}}) => {
  return (
    <div className="topic-list__item">
      <div className="topic-list__item span ">{title}</div>
    </div>
  );
};

export default TopicListItem;
