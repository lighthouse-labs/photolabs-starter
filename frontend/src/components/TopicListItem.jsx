import React from "react";
import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ title, link }) => {
  return (
    <div className="topic-list__item">
      <a href={link}><span>{title}</span></a>
    </div>
  );
};

export default TopicListItem;
