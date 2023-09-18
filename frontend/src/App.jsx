import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //state to contain all the favourited photos
  const [favourites, setFavourites] = useState([]);

  //set as state to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  //setting state to show the currently clicked photo
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const selectedPhoto = (photoDataId) => {
    //checks if photoId exists in the selected array, if it does it removes from the array and resets the selected state
    if (favourites.includes(photoDataId)) {
      const copyFavourites = [...favourites].filter((photoId) => photoId !== photoDataId);
      setFavourites(copyFavourites);
    } else {
      setFavourites((prevState) => [...prevState, photoDataId]);
    }
  };

  const selectedPhotoHandler = (id) => {
    selectedPhoto(id);
  };

  const isFavourite = (photoDataId) => {
    //should return true if the id exists in the selected array
    return favourites.includes(photoDataId);
  };
 

  const isFavPhotoExist = (arr) => arr.length > 0; //checks if any photo has been liked

  //function to change modal state
  const setModalHandler = (id) => {
    setIsModalOpen(true);
    //current photo is the result of a search through photos array to get photo with the selected id
    const currentPhoto = photos.find((photo) => photo.id === id);
    setClickedPhoto(currentPhoto);
  };

  // function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        favourites={favourites}
        selectedPhoto={selectedPhoto}
        selectedPhotoHandler={selectedPhotoHandler}
        isFavourite={isFavourite}
        isFavPhotoExist={isFavPhotoExist}
        setModalHandler={setModalHandler}
        setClickedPhoto={setClickedPhoto}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhotoHandler={selectedPhotoHandler}
          closeModal={closeModal}
          clickedPhoto={clickedPhoto}
          photos={photos}
          isFavourite={isFavourite}
          selectedPhoto={selectedPhoto}
          setModalHandler={setModalHandler}
          setClickedPhoto={setClickedPhoto}
        />
      )}
    </div>
  );
};

export default App;
