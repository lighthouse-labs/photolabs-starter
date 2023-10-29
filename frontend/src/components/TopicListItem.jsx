import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { topicId, dispatch } = props;

  const handleTopicClick = () => {
    dispatch({ type: 'SET_SELECTED_TOPIC', payload: topicId })
  }

  return (
    <div className="topicListItem topic-list__item" onClick={handleTopicClick} >
      <span className="label topic-list__item span"> {props.title} </span>
    </div>
  );
};

export default TopicListItem;
