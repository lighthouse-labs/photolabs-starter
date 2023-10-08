import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <div key={topic.id}>
          <TopicListItem title={topic.title} slug={topic.slug} id={topic.id} fetchPhotosByTopic={props.fetchPhotosByTopic} />
        </div>
      ))}
    </div>
  );
};

export default TopicList;
