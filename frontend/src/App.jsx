import React, {useState} from 'react';
import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    setSidePeek,
    sidePeek,
    setSampleDataForPhotoListItem,
    favourite,
    toggleFavourite,
    sampleDataForPhotoListItem,
    photos,
    topics,
    get_photo_by_topics
    
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute photos={photos} get_photo_by_topics={get_photo_by_topics} topics={topics}  setSidePeek={setSidePeek} sidePeek={sidePeek} setSampleDataForPhotoListItem={setSampleDataForPhotoListItem} favourite={favourite} toggleFavourite={toggleFavourite} />

      {sidePeek && <PhotoDetailsModal  setSidePeek={setSidePeek} sampleDataForPhotoListItem={sampleDataForPhotoListItem} photos={photos} setSampleDataForPhotoListItem={setSampleDataForPhotoListItem}  favourite={favourite} toggleFavourite={toggleFavourite}  />}
    </div>
  );
};

export default App;