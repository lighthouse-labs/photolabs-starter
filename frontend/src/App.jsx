import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import mockPhotos from "./mocks/photos";

const App = () => {
  // const [favouritePhotos, dispatch] = useReducer((countFavourite, action) => {
  //   return countFavourite + action;
  // }, []);
  // console.log("favouritePhotos", favouritePhotos);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState();
  const [showProfile, setShowProfile] = useState(true);

  const openModal = (id) => {
    setDetail(mockPhotos.filter((photo) => photo.id === id));
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <HomeRoute
        // favouritePhotos={favouritePhotos}
        // addFavouritePhoto={addFavouritePhoto}
        openModal={openModal}
        mockPhotos={mockPhotos}
        showProfile={showProfile}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
      />
      {showModal && (
        <PhotoDetailsModal
          openModal={openModal}
          detail={detail}
          showProfile={!showProfile}
          imageContainerClassName="photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
        />
      )}
    </div>
  );
};

export default App;
