import React from "react";
import PhotoList from "./PhotoList";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  return (
    <span className="topic-list__item">
      <span>
        {props.title}
      </span>
      
     
    </span>
  );
};

export default TopicListItem;
