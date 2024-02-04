import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
// import topics from "mocks/topics";


const TopicList = ({ topics }) => {
  console.log('Topics:', topics);
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem title={topic.title} key={topic.id}/>
      ))}
    </div>
  );
};

export default TopicList;
