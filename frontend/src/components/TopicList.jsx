import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = () => {
  const sampleDataForTopicList = [
    {
      id: "1",
      slug: "topic-1",
      title: "Nature",
    },
    {
      id: "2",
      slug: "topic-2",
      title: "Travel",
    },
    {
      id: "3",
      slug: "topic-3",
      title: "People",
    },
  ];
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topicData) => (
        <TopicListItem key={topicData.id} topic={topicData} />
      ))}
    </div>
  );
};

export default TopicList;
