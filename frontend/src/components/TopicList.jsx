import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topicsList = props.topics.map((item) => {
    return <span key={item.id} onClick={() => {props.onTopicClick(item.id)}}>
      {item.title}</span>
  })

  return (
    <div className="top-nav-bar__topic-list">
      <TopicListItem topics={topicsList}/>
    </div>
  );
};

export default TopicList;
