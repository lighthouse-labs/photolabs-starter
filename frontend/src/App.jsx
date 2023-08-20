import React, {useState} from 'react';
import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    setSidePeek,
    sidePeek,
    setSampleDataForPhotoListItem,
    favourite,
    toggleFavourite,
    sampleDataForPhotoListItem
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}  setSidePeek={setSidePeek} sidePeek={sidePeek} setSampleDataForPhotoListItem={setSampleDataForPhotoListItem} favourite={favourite} toggleFavourite={toggleFavourite} />

      {sidePeek && <PhotoDetailsModal  setSidePeek={setSidePeek} sampleDataForPhotoListItem={sampleDataForPhotoListItem} photos={photos}  favourite={favourite} toggleFavourite={toggleFavourite}  />}
    </div>
  );
};

export default App;