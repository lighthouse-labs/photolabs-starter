import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [likedPhotos, setLikedPhotos] = useState([])
  
  const handleButtonClick = (photoId) => {
    if (!likedPhotos.includes(photoId)) {
      setLikedPhotos([...likedPhotos, photoId])
    } else {
      setLikedPhotos([...likedPhotos].filter((id) => id !== photoId))
    }
  }
  
  return (
    <div className="home-route">
      <TopNavigation 
      likedPhotos={likedPhotos}
      />
      <PhotoList 
      likedPhotos={likedPhotos}
      handleButtonClick={handleButtonClick}/>
    </div>
  );
};

export default HomeRoute;
