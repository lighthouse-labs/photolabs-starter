import React, { useState } from "react";

// import PhotoList from "./components/PhotoList";
// import TopicList from "./components/TopicList";
// import TopNavigationBar from "components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute.jsx";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photosData from "./mocks/photos";
import topicsData from "./mocks/topics";

// import HomeRoute from "routes/HomeRoute";

const App = () => {
  const [photos, setPhotos] = useState(photosData);
  const [topics, setTopics] = useState(topicsData);

  // State for modal and clicked photo
  const [openModal, setOpenModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

  // Close modal
  const closeModal = () => {
    setOpenModal(false);
    setClickedPhoto(null);
  };

  // Handler when photo is clicked
  const photoClickHandler = (photoId) => {
    setClickedPhoto(photoId); //clicked photo
    setOpenModal(true); //Modal window is opened
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        photoClickHandler={photoClickHandler}
      />
      {openModal && (
        <PhotoDetailsModal
          clickedPhoto={clickedPhoto}
          closeModal={closeModal}
          photos={photos}
        />
      )}
    </div>
  );
};

export default App;
