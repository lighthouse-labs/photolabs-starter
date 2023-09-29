import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import "../styles/HomeRoute.scss";
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = (props) => {

  const {
    favoritedPhotoIds,
    toggleFavorite,
    photoData,
    topicData,
    fetchPhotosByTopic,
    setPhotoData,
    setTopicData,
    isModalVisible,
    openModal,
    closeModal,
    selectedPhotoData
    
  } = useApplicationData();

  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    // Fetch photo data when the component mounts
    fetch('/api/photos') //Updated
      .then((response) => response.json())
      .then((data) => {
        setPhotoData(data);
      })
      .catch((error) => console.error('Error fetching photo data:', error));

    // Fetch topic data when the component mounts
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setTopicData(data);
      })
      .catch((error) => console.error('Error fetching topic data:', error));
  }, []);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId); // Set the selected topic
    // Fetch photos for the selected topic using the new function
    fetchPhotosByTopic(topicId)
      .then((data) => {
        setPhotoData(data);
      })
      .catch((error) => console.error(`Error fetching photos for topic ${topicId}:`, error));
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        favoritedCount={favoritedPhotoIds.length}
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}
        onSelectTopic={handleTopicClick}
        topicData={topicData}
      />
      <PhotoList
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        closeModal={closeModal}
        isModalVisible={isModalVisible}
        photoData={photoData}
      >
       
      </PhotoList>
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
      {isModalVisible && (
        <PhotoDetailsModal
          favoritedPhotoIds={favoritedPhotoIds}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
          closeModal={closeModal}
          isModalVisible={isModalVisible}
          photoData={photoData}
          selectedPhotoData={selectedPhotoData}
        />
      )}
    </div>
  );
};

export default HomeRoute;
