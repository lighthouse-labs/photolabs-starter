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

const TopicList = (props) => {
  const mappedTopics = 
props.topics.map
((topic) => {
    return (
      <TopicListItem
      key={ 
topic.id
 }
      title={ topic.title }
      link={ 
topic.link
 }/>
    )
  }); 
  return (
    <div className="top-nav-bar--topic-list">
      { mappedTopics }
    </div>
  ); 
};

export default TopicList;
