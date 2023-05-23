import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const onCategoryChange = () => {
    props.dispatch({
      type: "CHANGE_CATEGORY",
      payload: props.slug,
    });
  };

  return (
    <div className="topic-list--item" onClick={onCategoryChange}>
      {/* <a href={`/api/topics/photos/1`}> */}
      <span>{props.title}</span>
      {/* </a> */}
    </div>
  );
};

export default TopicListItem;
