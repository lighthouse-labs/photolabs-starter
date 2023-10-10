import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    state: {
      showModal,
      selectedImage,
      favourites,
      photoData,
      topicData
    }
  } = useApplicationData();
  
  return (
    <Router>
      <Routes>
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
          setSelectedImage={selectImage}
        />
      }
    </Router>
  );
}

export default App;
