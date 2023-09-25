import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, getTopicId }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <TopicListItem
            topic={topic}
            key={topic.id}
            getTopicId={() => {
              getTopicId(topic.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
