import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, getTopicId }) => {
  return (
    <div className="topic-list__item" onClick={getTopicId}>
      <span> {topic.title}</span>
    </div>
  );
};

export default TopicListItem;
