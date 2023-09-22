import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";
import "../styles/TopicList.scss";

const TopicList = ({ onSelectTopic }) => {
  const handleTopicClick = (topicId) => {
    // Call the onSelectTopic function with the selected topic's ID
    onSelectTopic(topicId);
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem
          key={topicData.id}
          topic={topicData}
          onClick={() => handleTopicClick(topicData.id)} // Pass the click handler
        />
      ))}
    </div>
  );
};

export default TopicList;
