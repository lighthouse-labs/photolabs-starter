import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  // Define state within the functional component
  const [topiclist, setTopicList] = useState([]);

  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} slug={topic.slug} />
      ))}
    </div>
  );
};

export default TopicList;

