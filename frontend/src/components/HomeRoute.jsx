import React, {useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  const [favoritedPhotoIds, setFavoritedPhotoIds] = useState([]);

  const toggleFavorite = (photoId) => {
    console.log("Toggling favorite for photo ID:", photoId);
    if (favoritedPhotoIds.includes(photoId)) {
      setFavoritedPhotoIds(favoritedPhotoIds.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotoIds([...favoritedPhotoIds, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritedCount={favoritedPhotoIds.length} favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}/>
      <PhotoList favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;