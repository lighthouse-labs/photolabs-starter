import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const renderedList = topics.map((listItem) => (
    <TopicListItem key={listItem.id} listItem={listItem} />
  ));

  return <div className="top-nav-bar__topic-list">{renderedList}</div>;
};

export default TopicList;
