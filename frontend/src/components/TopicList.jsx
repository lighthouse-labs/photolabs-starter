import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { darkMode } = props;
  const topics = props.topics.map(({id, slug, title}) => {
    return (
      <TopicListItem
        key={id}
        id={id}
        slug={slug}
        title={title}
        setCurrentTopic={props.setCurrentTopic}
        darkMode={darkMode}
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
