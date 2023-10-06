import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  console.log("HomeRoute render");

  const [favourites, setFavourites] = useState([]);
  console.log("favourites:", favourites);

  const toggleFavourite = id => {
    setFavourites(prevFavourites => 
        prevFavourites.includes(id) ? prevFavourites.filter(favId => favId !=id)
        : [...prevFavourites, id]
    );
};
function isFavPhotoExist() {
  if (favourites.length === 0) {
    return false;
  } else {
    return true;
  }
}
  return (
    <div className="home-route">
      <div className='top-nav-bar'>
        <TopNavigation />
        <TopicList/>
        <FavBadge isFavPhotoExist={isFavPhotoExist()}/>
      </div>
      <PhotoList setShowModal={props.setShowModal} favourites={favourites} toggleFavourite={toggleFavourite} setSelectedImage={props.setSelectedImage}/>
    </div>
  );
};

export default HomeRoute;
