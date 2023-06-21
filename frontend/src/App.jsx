import React, { useState } from "react";

import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import photos from "./mocks/photos.js";
import topics from "./mocks/topics.js";

// Main application component
const App = () => {
  // State variables for managing modal state and clicked photo
  const [openModal, setOpenModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);
console.log("these are photos:", photos)
  // Event handler for when a photo is clicked
  const photoClickHandler = (photo) => {
    setClickedPhoto(photo); // Set the clicked photo
    setOpenModal(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setOpenModal(false); // Close the modal
    setClickedPhoto(null); // Reset the clicked photo
  };

  // Render the application
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onPhotoClick={photoClickHandler}
      />
      {openModal && (
        <PhotoDetailsModal photo={clickedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;