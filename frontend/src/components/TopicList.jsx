import React from "react";
import TopicListItem from "./TopicListItem";
// import topics from "../mocks/topics";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const handleTopicClick = (topicId) => {
    // Call the onSelectTopic function with the selected topic's ID
    props.onSelectTopic(topicId);
  };


  return (
    <div className="top-nav-bar__topic-list">
      {props.topicData.map((topic) => (
        <div
          key={topic.id}
          onClick={() => handleTopicClick(topic.id)} // Pass the click handler
        >
          <TopicListItem topic={topic} />
        </div>
      ))}
    </div>
  );
};

export default TopicList;
