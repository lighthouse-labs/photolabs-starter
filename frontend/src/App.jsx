import React, { useState } from "react";

// import PhotoList from "./components/PhotoList";
// import TopicList from "./components/TopicList";
// import TopNavigationBar from "components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute.jsx";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import photoData from "./mocks/photos";
import topicData from "./mocks/topics";

import { useApplicationData } from "./hooks/useApplicationData";
import * as photoHelpers from "./helpers/photolabsHelpers";

// import HomeRoute from "routes/HomeRoute";

const App = () => {
  const [photos, setPhotos] = useState(photoData);
  const [topics, setTopics] = useState(topicData);

  // State for modal and clicked photo
  const [openModal, setOpenModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

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

  const isPhotoFavorite = (photoId) => {
    const photo = photos.find((photo) => Number(photo.id) === Number(photoId));
    if (photo) {
      // if ("isFavorite" in photo) {
      if (photo.isFavorite) {
        return photo.isFavorite;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  // return photo ? photo.isFavorite : false;

  const checkFavorites = () => {
    return photos.some((el) => el.isFavorite === true);
  };

  const toggleFavoritePhoto = (photoId) => {
    setPhotos((prevData) =>
      prevData.map((photo) =>
        photo.id === photoId
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo
      )
    );
  };
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isPhotoFavorite={isPhotoFavorite}
        toggleFavoritePhoto={toggleFavoritePhoto}
        photoClickHandler={photoClickHandler}
        checkFavorites={checkFavorites}
      />
      {openModal && (
        <PhotoDetailsModal
          photos={photos}
          closeModal={closeModal}
          isPhotoFavorite={isPhotoFavorite}
          clickedPhoto={clickedPhoto}
        />
      )}
    </div>
  );
};
// _____________________________________________________________________With useReducer
// const App = () => {
//   const {
//     photos,
//     topics,
//     modal,
//     setModal,
//     toggleFavoritePhoto,
//     isPhotoFavorite,
//     closeModal,
//     checkFavorites,
//     photoClickHandler,
//   } = useApplicationData();

//   return (
//     <div className="App">
//       <HomeRoute
//         photos={photos}
//         topics={topics}
//         isPhotoFavorite={isPhotoFavorite}
//         toggleFavoritePhoto={toggleFavoritePhoto}
//         photoClickHandler={photoClickHandler}
//         checkFavorites={checkFavorites}
//       />
//       {modal.isOpenModal && (
//         <PhotoDetailsModal
//           photos={photos}
//           closeModal={closeModal}
//           isPhotoFavorite={isPhotoFavorite}
//           clickedPhoto={modal.clickedPhoto}
//           isOpenModal={() => setModal({ type: "CLOSE_MODAL" })}
//         />
//       )}
//     </div>
//   );
// };

export default App;
