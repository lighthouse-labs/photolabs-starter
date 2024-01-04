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

  const [isModelOpen, setIsModelOpen] = useState(false)

  const handleModel = () => {
    setIsModelOpen(true);
  }
  
  return (
    <div className="home-route">
      <TopNavigationBar 
        favouritedPhotos={favouritedPhotos}
      />
      <PhotoList 
        addFavouritePhoto={addFavouritePhoto}
        onPhotoClick={handleModel}
      />
      {isModelOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default HomeRoute;