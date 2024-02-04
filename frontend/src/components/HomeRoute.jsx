import React, { useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics}) => {

  const [favorite, setFavorite] = useState([]);

  const presentFavorites = [];

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
    </div>
  );
};

export default HomeRoute;