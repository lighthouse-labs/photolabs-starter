import React from "react";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    console.log("clicked");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = <PhotoDetailsModal onClose={handleClose} />;

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={handleClick} />
      {showModal && modal}
    </div>
  );
};

export default App;
