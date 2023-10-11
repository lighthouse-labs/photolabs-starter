import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    toggleShowModal,
    selectImage,
    toggleFavourite,
    isFavPhotoExist,
    showTopicPhotos,
    homePhotos,
    switchMode,
    state: {
      showModal,
      selectedImage,
      favourites,
      photoData,
      topicData,
      darkMode
    }
  } = useApplicationData();

  function getSimilarPhotos() {
    if (selectedImage) {
      const photo = photoData.find((photo) => photo.id === selectedImage.id)
      return photo.similar_photos;
    }
    return [];
  }

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={
          <HomeRoute
            setShowModal={toggleShowModal} 
            setSelectedImage={selectImage}
            favourites={favourites} 
            toggleFavourite={toggleFavourite}
            isFavPhotoExist={isFavPhotoExist}
            photoData={photoData}
            topicData={topicData}
            showTopicPhotos={showTopicPhotos}
            homePhotos={homePhotos}
            switchMode={switchMode}
            darkMode={darkMode}
          />}
        />
      </Routes>
      {showModal && 
        <PhotoDetailsModal 
          setShowModal={toggleShowModal}
          id={selectedImage.id}
          full={selectedImage.full}
          regular={selectedImage.regular}
          name={selectedImage.name}
          location={selectedImage.location}
          profile={selectedImage.profile}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          similar_photos={selectedImage.similar_photos}
          similar_photos_modal={getSimilarPhotos()}
          setSelectedImage={selectImage}
          darkMode={darkMode}
        />
      }
    </Router>
  );
}

export default App;
