import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, getPhotosByTopic }) => {
  // Function to render individual topic items
  const renderTopicItems = () => {
    return topics.map((topic, index) => (
      <TopicListItem
        key={`${topic.id}_${index}`}
        label={topic.title}
        link={topic.link}
        className="topic-list__item"
        onClick={() => getPhotosByTopic(topic.id)}
      />
    ));
  };

  return (
    <div className="top-nav-bar__topic-list">
      {/* Render the topic items */}
      {renderTopicItems()}
    </div>
  );
};

export default TopicList;
