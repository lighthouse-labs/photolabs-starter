import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import { useState } from 'react';
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const HomeRoute = () => {

  const [favouritedPhotos, setFavouritedPhotos] = useState([])

  const addFavouritePhoto = (photo) => {
    setFavouritedPhotos([...favouritedPhotos, photo]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  }

  
  return (
    <div className="home-route">
      <TopNavigationBar 
        favouritedPhotos={favouritedPhotos}
      />
      <PhotoList 
        addFavouritePhoto={addFavouritePhoto}
        onPhotoClick={handleModalToggle}
      />
      {isModalOpen ? <PhotoDetailsModal onCloseClick={handleModalToggle}/> : null}
    </div>
  );
};

export default HomeRoute;