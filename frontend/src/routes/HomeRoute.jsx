// HomeRoute.jsx
import React, { useState } from 'react';
import TopNavBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal'; // Corrected import path
import mockPhotos from '../mocks/photos.js';
import mockTopics from '../mocks/topics.js';

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

const transformTopicData = (topicData) => {
  return topicData.map((topic) => {
    return {
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
    };
  });
};

const transformedTopics = transformTopicData(mockTopics);
const transformedPhotos = transformPhotoData(mockPhotos);

const HomeRoute = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [alert, setAlert] = useState(false);

  // State to store similar photos
  const [similarPhotosData, setSimilarPhotos] = useState([]);

  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);

  const openPhotoModal = (id, photoData) => {
    setSelectedPhotoId(id);
    setSelectedPhotoData(photoData);

    // Fetch actual similar photo data based on IDs
    const similarPhotoIds = photoData.similarPhotos || [];
    const similarPhotosData = [];

    for (const a of similarPhotoIds) {
        const similarPhoto = transformedPhotos.find(photo =>photo.id== a  );
        if (similarPhoto) {
            similarPhotosData.push(similarPhoto);
        }
    }
    // Pass similar photo data to the modal
    setSimilarPhotos(similarPhotosData);

    setModalVisible(true);
};


  const closeModal = () => {
    setSelectedPhotoId(null);
    setModalVisible(false);
  };

  return (
    <div className="home-route">
      <TopNavBar
        topics={transformedTopics}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
        alert={alert}
        setAlert={setAlert}
      />
      <PhotoList
        photos={transformedPhotos}
        alert={alert}
        setAlert={setAlert}
        isLiked={(photoId) => likedPhotos.includes(photoId)}
        toggleLike={toggleLike}
        openPhotoModal={openPhotoModal}
      />
      {modalVisible && selectedPhotoId !== null && (
        <PhotoDetailsModal
          selectedPhotoId={selectedPhotoId}
          closeModal={closeModal}
          selectedPhotoData={selectedPhotoData}
          similarPhotos={similarPhotosData} // Pass similar photos to the modal
          setAlert={setAlert}
          isLiked={(photoId) => likedPhotos.includes(photoId)}
          toggleLike={toggleLike}
          openPhotoModal={openPhotoModal}
        />
      )}
    </div>
  );
};

export default HomeRoute;
