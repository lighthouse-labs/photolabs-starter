import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title }) => {

  return (
    <div className="topic-list__item">
      <a className={id} >{title}</a>
    </div>
  );
};

export default TopicListItem;
