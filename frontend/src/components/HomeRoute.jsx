import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Fetch photo data when the component mounts
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        setPhotoData(data); // Set photoData in state
      })
      .catch((error) => console.error('Error fetching photo data:', error));

    // Fetch topic data when the component mounts
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setTopicData(data); // Set topicData in state
      })
      .catch((error) => console.error('Error fetching topic data:', error));
  }, [dispatch, setPhotoData, setTopicData]);

  return (
    <div className="home-route">
      <TopNavigationBar
        favoritedCount={favoritedPhotoIds.length}
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}
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
          <div key={topic.id} className="topic-item">
            {topic.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRoute;
