import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic }) => {

  return (
    <div className="topic-list__item">
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
