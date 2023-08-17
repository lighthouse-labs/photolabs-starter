import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <span className="topic-list__item">
      {props.sampleTitle.title}
    </span>
  );
};

export default TopicListItem;
