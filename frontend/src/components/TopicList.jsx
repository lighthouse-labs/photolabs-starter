import React from 'react';

import './TopicList.scss';

const TopicList = () => {
  <div className="top-nav-bar__topic-list">
    {/* Insert React */}
  </div>
}

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList