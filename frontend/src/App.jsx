import React, { useState } from "react";

// import PhotoList from "./components/PhotoList";
// import TopicList from "./components/TopicList";
// import TopNavigationBar from "components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute.jsx";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photosData from "./mocks/photos";
import topicsData from "./mocks/topics";
import * as photoHelpers from "./helpers/photolabsHelpers";

// import HomeRoute from "routes/HomeRoute";

const App = () => {
  // const [photos, setPhotos] = useState(photosData);
  const [topics, setTopics] = useState(topicsData);

  // State for modal and clicked photo
  const [openModal, setOpenModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);

  // const toggleFavoritePhoto = (photoID) => {
  //   setIsFavorite(isFavorite === "true" ? "false" : "true");
  // };

  // Close modal
  const closeModal = () => {
    setOpenModal(false); //Modal window is closed
    setClickedPhoto(null);
  };

  // Handler when photo is clicked
  const photoClickHandler = (photoId) => {
    setClickedPhoto(photoId); //clicked photo
    setOpenModal(true); //Modal window is opened
  };

  const [favoritePhotos, setFavoritePhotos] = useState(photosData); //favorite to photos
  // console.log("home", photolabs);

  const addPhotoFavorite = (photoId) => {
    // const updatedPhotos = photoHelpers.addFavoriteToPhotos(
    //   favoritePhotos,
    //   photoId
    // );
    // setFavoritePhotos(updatedPhotos);
    // return favoritePhotos[photoId].isFavorite;
  };
  const isPhotoFavorite = (photoId) => {
    const photo = favoritePhotos.find(
      (photo) => Number(photo.id) === Number(photoId)
    );
    if (photo) {
      if ("isFavorite" in photo) {
        return photo.isFavorite;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  // return photo ? photo.isFavorite : false;

  const toggleFavoritePhoto = (photoId) => {
    setFavoritePhotos((prevData) =>
      prevData.map((photo) =>
        photo.id === photoId
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo
      )
    );
  };

  // const toggleFavoritePhoto = (photoId) => {
  //   setFavoritePhotos((prevPhotos) =>
  //     prevPhotos.map((photo) =>
  //       photo.id === photoId
  //         ? { ...photo, isFavorite: !photo.isFavorite }
  //         : photo
  //     )
  //   );
  // };

  return (
    <div className="App">
      <HomeRoute
        favoritePhotos={favoritePhotos}
        isPhotoFavorite={isPhotoFavorite}
        toggleFavoritePhoto={toggleFavoritePhoto}
        photoClickHandler={photoClickHandler}
        topics={topics}
      />
      {openModal && (
        <PhotoDetailsModal
          clickedPhoto={clickedPhoto}
          closeModal={closeModal}
          favoritePhotos={favoritePhotos}
          isPhotoFavorite={isPhotoFavorite}
        />
      )}
    </div>
  );
};

export default App;
