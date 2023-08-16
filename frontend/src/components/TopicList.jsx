import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topicListData.map((element) =>{
        return (
          <TopicListItem 
          key={element.id}
          slug={element.slug}
          title={element.title} />
        )
      })}
    </div>
  );
};

export default TopicList;
