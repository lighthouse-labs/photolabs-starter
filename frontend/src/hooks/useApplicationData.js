// useApplicationData.js
import { useState, useEffect } from 'react';
import mockPhotos from '../mocks/photos.js';
import mockTopics from '../mocks/topics.js';

const useApplicationData = () => {
  // State for storing transformed photos and topics
  const [transformedPhotos, setTransformedPhotos] = useState([]);
  const [transformedTopics, setTransformedTopics] = useState([]);

  // State for managing liked photos, alerts, and other application-specific data
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [alert, setAlert] = useState(false);

  // State for modal and selected photo data
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);
  const [similarPhotosData, setSimilarPhotos] = useState([]);

  // Function to transform photo data
  const transformPhotoData = (photoData) => {
    return photoData.map((photo) => {
      return {
        id: photo.id,
        location: {
          city: photo.location.city,
          country: photo.location.country,
        },
        urls: {
          full: photo.urls.full,
          regular: photo.urls.regular,
        },
        user: {
          id: photo.user.id,
          username: photo.user.username,
          name: photo.user.name,
          profile: photo.user.profile,
        },
        similarPhotoIds: [2, 3, 4, 5], // Example similar photo IDs
      };
    });
  };

  // Function to transform topic data
  const transformTopicData = (topicData) => {
    return topicData.map((topic) => {
      return {
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
      };
    });
  };

  useEffect(() => {
    // Simulate fetching data from files or an API
    const fetchAndTransformData = async () => {
      // Simulate fetching data (replace with actual fetching logic)
      const photoData = mockPhotos; // Replace with actual photo data fetching
      const topicData = mockTopics; // Replace with actual topic data fetching

      const transformedPhotos = transformPhotoData(photoData);
      const transformedTopics = transformTopicData(topicData);

      setTransformedPhotos(transformedPhotos);
      setTransformedTopics(transformedTopics);
    };

    fetchAndTransformData();
  }, []);

  // Function to toggle liked photos
  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  // Function to open the photo modal
  const openPhotoModal = (id, photoData) => {
    setSelectedPhotoId(id);
    setSelectedPhotoData(photoData);

    // Fetch actual similar photo data based on IDs (replace with actual fetching logic)
    const similarPhotoIds = photoData.similarPhotos|| [];
    const similarPhotosData = [];
    // console.log('hok',similarPhotoIds)
    for (const a of similarPhotoIds) {
      const similarPhoto = transformedPhotos.find((photo) => photo.id == a);
      if (similarPhoto) {
        similarPhotosData.push(similarPhoto);
        // console.log('hokdata',similarPhoto)
      }
    }
    // Pass similar photo data to the modal
    setSimilarPhotos(similarPhotosData);
    
    setModalVisible(true);
  };

  // Function to close the photo modal
  const closeModal = () => {
    setSelectedPhotoId(null);
    setModalVisible(false);
  };

  // Other functions and state updates related to your application's logic

  return {
    transformedPhotos,
    transformedTopics,
    likedPhotos,
    setLikedPhotos,
    alert,
    setAlert,
    similarPhotosData,
    modalVisible,
    selectedPhotoId,
    selectedPhotoData,
    toggleLike,
    openPhotoModal,
    closeModal,
  };
};

export default useApplicationData;
