import React, { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

// Main application component
const App = () => {
  const {photos,
    getPhotosByTopic,topics
  } = useApplicationData();
  // State variables for managing modal state and clicked photo
  const [openModal, setOpenModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

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
        getPhotosByTopic={getPhotosByTopic}
      />
      {openModal && (
        <PhotoDetailsModal  photo={clickedPhoto} onClose={closeModal} />
      )}
      
    </div>
  );
};

export default App;