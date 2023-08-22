import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([])
  
  const handleButtonClick = (photoId) => {
    if (!likedPhotos.includes(photoId)) {
      setLikedPhotos([...likedPhotos, photoId])
    } else {
      setLikedPhotos([...likedPhotos].filter((id) => id !== photoId))
    }
  }
  
  return (
    <div className="home-route" onClick={props.onClick}>
      <TopNavigation 
      likedPhotos={likedPhotos}
      />
      <PhotoList 
      photos={props.photos}
      onClickPhoto={props.onClickPhoto}
      likedPhotos={likedPhotos}
      handleButtonClick={handleButtonClick}/>
    </div>
  );
};

export default HomeRoute;
