import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicHandler = () => {
    props.fetchPhotosByTopic(props.id);
    // console.log('topicid',props.id);
  };

  return (
    <div className="topic-list__item">
      <a href={props.slug} key={props.id} onClick={topicHandler}>
        {props.title}
      </a>
    </div>
  );
};

export default TopicListItem;
