import React, { useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const HomeRoute = ({photos, topics}) => {

  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    setFavorite((presentFavorites) => {
      if(presentFavorites.includes(id)) {
        return presentFavorites.filter(favoriteId => favoriteId !== id);
      } else {
        return [...presentFavorites, id]
      }
    })
  }

  return (
    <div className='home-route'>
    <TopNavigationBar topics={topics} isFavorite={favorite}/>
    <PhotoList photos={photos} toggleFavorite={toggleFavorite} isFavorite={favorite}/>
    <PhotoDetailsModal/>
    </div>
  );
};

export default HomeRoute;