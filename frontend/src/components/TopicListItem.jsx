import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, label, link, onClick } = props;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className="topic-list__item ">
      <a
        href={link}
        key={id}
        className="topic-list__item-link"
        onClick={handleClick}
      >
        <span>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;