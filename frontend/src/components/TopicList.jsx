import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicItem) => (
        <TopicListItem topicItem={topicItem} key={topicItem.id}/>
      ))}
    </div>
  );
};

export default TopicList;
