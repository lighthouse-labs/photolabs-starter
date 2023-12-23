import React from "react";

import "../styles/TopicListItem.scss";

const topicListItems = {
  id: "1",
  slug: "nature",
  label: "Nature",
}

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
