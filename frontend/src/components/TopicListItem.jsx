import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({title, slug}) => {
  return (
    <div className="topic-list__item">
      <a className="topic-list__link" href={`http://localhost:3000${slug}`}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
