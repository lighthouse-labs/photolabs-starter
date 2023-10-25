
import React, { useState } from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topicData, handleTopicSelect }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          title={topic.title}
          handleTopicSelect={handleTopicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;
