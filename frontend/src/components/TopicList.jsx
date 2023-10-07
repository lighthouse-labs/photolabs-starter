import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  // Define state within the functional component

  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <div key={topic.id}> {/* Wrapping the content in a div */}
          {/* {console.log('TOPC', topic)} */}
          <TopicListItem title={topic.title} slug={topic.slug} />
        </div>
      ))}
    </div>
  );
};

export default TopicList;


