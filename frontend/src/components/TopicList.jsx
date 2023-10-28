import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topicData } = props

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic, index) => 
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
