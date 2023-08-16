import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topicListData.map((e) =>{
        return (
          <TopicListItem 
          key={e.id}
          slug={e.slug}
          title={e.title} />
        )
      })}
    </div>
  );
};

export default TopicList;
