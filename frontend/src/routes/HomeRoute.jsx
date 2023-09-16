import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = ({ setModalHandler }) => {
  const [selected, setSelected] = useState([]);

  const selectedPhoto = (photoDataId) => {
    //checks if photoId exists in the selected array, if it dies it removes from the array and resets the selected state
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

  const isFavPhotoExist = (arr) => arr.length > 0; //checks if any photo has been liked

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist(selected)} />
      <PhotoList
        photos={photos}
        selectedPhoto={selectedPhoto}
        isFavourite={isFavourite}
        setModalHandler={setModalHandler}
      />
    </div>
  );
};

export default HomeRoute;
