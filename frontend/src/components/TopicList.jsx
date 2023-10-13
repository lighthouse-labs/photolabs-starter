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
  const topics = sampleDataForTopicList.map(({id, slug, title}, i) => {
    return (
      <TopicListItem
        key={i}
        id={id}
        slug={slug}
        title={title}
      />
    );
  });
  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
