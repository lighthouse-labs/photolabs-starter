import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import { useState } from 'react';

const HomeRoute = () => {

  const [favouritedPhotos, setFavouritedPhotos] = useState([])

  const addFavouritePhoto = (photo) => {
    setFavouritedPhotos([...favouritedPhotos, photo]);
  };
  
  return (
    <div className="home-route">
      <TopNavigationBar favouritedPhotos={favouritedPhotos}/>
      <PhotoList addFavouritePhoto={addFavouritePhoto}/>
    </div>
  );
};

export default HomeRoute;