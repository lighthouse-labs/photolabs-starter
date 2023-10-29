import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topicData } = props
  // console.log('topic.id', topicData)

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic, index) => 
        <TopicListItem 
          key={index}
          topicId={topic.id}
          slug={topic.slug}
          title={topic.title}
          topicData={props.topicData}
          dispatch={props.dispatch}
          topicSelected={props.topicSelected}
          setTopicSelected={props.setTopicSelected}
        />
      )} 
    </div>
  );
};

export default TopicList;
