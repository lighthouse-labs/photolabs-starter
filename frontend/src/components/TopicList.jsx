import React from "react";

// Styling
import "../styles/TopicList.scss";

// Components
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const { handleAllClick, topics, handleTopicClick } = props;
  return (
    <div className="top-nav-bar__topic-list topic-list__all" >
      <span onClick={ handleAllClick }> All </span>
      {topics.map((e) =>{
        return (
          <TopicListItem 
          key={e.id}
          id={e.id}
          slug={e.slug}
          title={e.title}
          handleTopicClick={handleTopicClick} 
          />
        )
      })}
    </div>
  );
};

export default TopicList;
