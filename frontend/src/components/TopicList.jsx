import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({onSelect, topics }) => {
  const renderedList = topics.map((listItem) => (
    <TopicListItem key={listItem.id} listItem={listItem} onSelect={onSelect}/>
  ));

  return <div className="top-nav-bar__topic-list">{renderedList}</div>;
};

export default TopicList;
