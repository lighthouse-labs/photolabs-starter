import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, photoByTopic }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} photoByTopic={photoByTopic} topic={topic}/>
      ))}
    </div>
  );
};

export default TopicList;
