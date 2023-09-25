import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, getTopicId, idCheck }) => {
  return (
    <div
      className={idCheck ? 'topic-list__item topic-list__item-active' : 'topic-list__item'}
      onClick={getTopicId}
    >
      <span> {topic.title}</span>
    </div>
  );
};

export default TopicListItem;
