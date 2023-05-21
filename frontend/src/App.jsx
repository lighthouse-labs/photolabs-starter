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
  const [profile, setProfile] = useState(true);

  const openModal = (id) => {
    console.log("Modal was clicked");
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
        profile={profile}
      />
      {showModal && (
        <PhotoDetailsModal
          openModal={openModal}
          detail={detail}
          profile={!profile}
        />
      )}
    </div>
  );
};

export default App;
