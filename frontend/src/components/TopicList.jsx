import React from "react";

import "../styles/TopicList.scss";
import "../styles/TopicListItem.scss"
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const topics = sampleDataForTopicList.map((topic) => 
    <TopicListItem 
      key={topic.id}
      sampleTitle={topic}
    />
  )
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

// const PhotoList = () => {
//   const photos = sampleDataForPhotoList.map((photo) =>
//     <PhotoListItem 
//       key = {photo.id}
//       sampleImage={photo}
//     />
//   )

//   return (
//     <ul className="photo-list">
//       {photos}
//     </ul>
//   );
// };


export default TopicList;
