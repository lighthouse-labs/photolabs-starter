import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <div key={topic.id}>
            <TopicListItem topic={topic} />
          </div>
        );
      })}
    </div>
  );
};

export default TopicList;
