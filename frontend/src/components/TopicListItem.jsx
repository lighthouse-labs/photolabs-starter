import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({slug,title}) => {
  return (
    <div className="topic-list__item">
      <a href={slug}>{title}</a>
    </div>
  );
};

export default TopicListItem;
