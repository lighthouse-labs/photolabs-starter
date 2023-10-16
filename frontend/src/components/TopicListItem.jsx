import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topicListItem topic-list__item">
      <span className="label topic-list__item span"> {props.title} </span>
    </div>
  );
};

// TopicListItem.defaultProps = {
//   label: 'Nature',
//   // TODO: We don't need a link.
//   link: 'insert link' 
// }

export default TopicListItem;
