import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { topicData, topicId, dispatch, setTopicSelected } = props

  const handleTopicClick = () => {

    // console.log('TOPICLISTITEM TOPICID', topicId)

    setTopicSelected(topicId)

  }

  return (
    <div className="topicListItem topic-list__item" onClick={handleTopicClick} >
      <span className="label topic-list__item span"> {props.title} </span>
    </div>
  );
};

export default TopicListItem;
