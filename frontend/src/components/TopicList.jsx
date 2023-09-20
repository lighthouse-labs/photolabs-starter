import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, topicSelect  }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) =>(
        <TopicListItem 
          key={topicData.id} 
          title={topicData.title} 
          link={topicData.id}
          topicSelect={topicSelect} />
      ))}
    </div>
  );
};

export default TopicList;
