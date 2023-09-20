import React from "react";
import TopicListItem from "./TopicListItem";
//import topics from "mocks/topics";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topics = props.topics;
  //console.log("topics", props)
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topicTitle={topic.title} handleImageFetch={props.handleImageFetch} topicId={topic.id} />
      ))}
    </ul>
  );
};

export default TopicList;
