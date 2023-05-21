import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";
import "../styles/TopicList.scss";

const TopicList = () => {
  const renderTopicList = topics.map((topic) => {
    return <TopicListItem key={topic.id} title={topic.title} />;
  });

  return <div className="top-nav-bar--topic-list">{renderTopicList}</div>;
};

export default TopicList;
