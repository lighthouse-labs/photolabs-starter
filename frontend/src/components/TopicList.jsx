import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, getTopicId, selectedTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        const idCheck = selectedTopic === topic.id; //to add active styling

        return (
          <TopicListItem
            topic={topic}
            key={topic.id}
            getTopicId={() => {
              getTopicId(topic.id);
            }}
            selectedTopic={selectedTopic}
            idCheck={idCheck}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
