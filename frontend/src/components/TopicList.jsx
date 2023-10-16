import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

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

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic, index) => 
        <TopicListItem 
          key={index}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
        />
      )} 
    </div>
  );
};

export default TopicList;
