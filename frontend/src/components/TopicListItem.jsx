import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <li className="topic-list__item" onClick={handleImageFetch}>
     <span>{props.topicTitle}</span>
    </li>
  );
};

export default TopicListItem;
