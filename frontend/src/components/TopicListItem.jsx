import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title }) => {

  return (
    <div className="topic-list__item">
      <button className={id} onClick={} >{title}</button>
    </div>
  );
};

export default TopicListItem;
