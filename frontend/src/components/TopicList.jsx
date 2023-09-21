import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topics = props.topics;
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topicTitle={topic.title}
          handleImageFetch={props.handleImageFetch}
          topicId={topic.id}
        />
      ))}
    </ul>
  );
};

export default TopicList;
