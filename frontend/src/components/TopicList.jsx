import React from "react";

// Styling
import "../styles/TopicList.scss";

// Components
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((e) =>{
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
