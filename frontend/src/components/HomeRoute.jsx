import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import "../styles/HomeRoute.scss";
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = (props) => {
  const {
    favoritedPhotoIds,
    toggleFavorite,
    photoData,
    topicData,
    dispatch,
    setPhotoData,
    setTopicData,
  } = useApplicationData();

  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    // Fetch photo data when the component mounts
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => {
        setPhotoData(data); // Set photoData in state
      })
      .catch((error) => console.error('Error fetching photo data:', error));

    // Fetch topic data when the component mounts
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setTopicData(data); // Set topicData in state
      })
      .catch((error) => console.error('Error fetching topic data:', error));
  }, [photoData, topicData]);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId); // Set the selected topic
    // Fetch photos for the selected topic
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotoData(data); // Set photoData in state with photos for the selected topic
      })
      .catch((error) => console.error(`Error fetching photos for topic ${topicId}:`, error));
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        favoritedCount={favoritedPhotoIds.length}
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}
        onSelectTopic={handleTopicClick} // Pass the handleTopicClick function as a prop
        topicData={topicData}
      />
      <PhotoList
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}
        openModal={props.openModal}
        closeModal={props.closeModal}
        isModalVisible={props.isModalVisible}
        photoData={photoData}
      />
      <div className="topic-list">
        {topicData.map((topic) => (
          <div
            key={topic.id}
            className={`topic-item ${selectedTopic === topic.id ? 'selected' : ''}`}
            onClick={() => handleTopicClick(topic.id)} // Call handleTopicClick when a topic is clicked
          >
            {topic.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRoute;
