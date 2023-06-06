import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const renderTopicList = props.topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        title={topic.title}
        slug={topic.slug}
        dispatch={props.dispatch}
        id={topic.id}
        selectTopic={props.selectTopic}
      />
    );
  });

  return <div className="top-nav-bar--topic-list">{renderTopicList}</div>;
};

export default TopicList;
