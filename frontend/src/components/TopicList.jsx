import React from "react";
import "../styles/TopicList.scss";
import "../styles/TopicListItem.scss"
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  
  const topicList = props.topicData.map((topic) => 
    <TopicListItem 
      key={topic.id}
      topic={topic}
      getPhotosByTopics={props.getPhotosByTopics}
    />
  )
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;