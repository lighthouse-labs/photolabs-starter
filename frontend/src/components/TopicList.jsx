import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";
import "../styles/TopicList.scss";



const TopicList = ({ topics, fetchPhotosByTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem 
          key={topic.id} 
          id={topic.id} 
          slug={topic.slug} 
          title={topic.title} 
          fetchPhotosByTopic={fetchPhotosByTopic}  // Pass it down
        />
      ))}
    </div>
  );
};

export default TopicList;
