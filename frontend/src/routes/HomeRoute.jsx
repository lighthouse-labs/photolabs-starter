import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = () => {
  const [selected, setSelected] = useState([]);

  const selectedPhoto = (photoDataId) => {
    if (selected.includes(photoDataId)) {
      const copySelected = [...selected].filter((photoId) => photoId !== photoDataId);
      setSelected(copySelected);
    } else {
      setSelected((prevState) => [...prevState, photoDataId]);
    }
  };

  const isFavourite = (photoDataId) => {
    //should return true if the id exists in the selected array
    return selected.includes(photoDataId);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} selectedPhoto={selectedPhoto} isFavourite={isFavourite} />
    </div>
  );
};

export default HomeRoute;
