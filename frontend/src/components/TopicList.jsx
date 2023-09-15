import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) =>(
        <TopicListItem key={topicData.id} title={topicData.title} link={topicData.slug} />
      ))}
    </div>
  );
};

export default TopicList;
