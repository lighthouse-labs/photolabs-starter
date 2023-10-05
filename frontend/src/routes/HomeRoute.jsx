import React, { useState } from 'react';
import TopNavBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from "./PhotoDetailsModal";
import mockPhotos from '../mocks/photos.js';
import mockTopics from '../mocks/topics.js';

const transformPhotoData = (photoData) => {
  return photoData.map((photo, index) => {
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

  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevLikedPhotos, photoId];
      }
    });
  };
  //SET Modal STAT
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const openPhotoModal = (id) => {
    setSelectedPhotoId(id);
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
          closeModal={closeModal} // Pass the closeModal function
        />
      )}
    </div>
  );
};

export default HomeRoute;
