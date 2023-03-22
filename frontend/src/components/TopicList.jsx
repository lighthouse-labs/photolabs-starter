import React from 'react';

import './TopicList.scss';

const TopicList = () => {
  <div className="top-nav-bar--topic-list">
    {/* Insert React */}
  </div>
}

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder' 
    },
    { 
      id: 2, 
      label: 'Food',
      link: 'link placeholder' 
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder' 
    },
  ]
}
export default TopicList