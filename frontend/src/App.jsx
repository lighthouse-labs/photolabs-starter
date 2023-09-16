import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
// Note: Rendering a single component to build components in isolation
const App = () => { 
 const [isModalOpen, setIsModalOpen] = useState(false)
 const [selectedPhoto, setSelectedPhoto] = useState(null);

 const toggleModal = (photoData = null) => {
  setIsModalOpen(!isModalOpen)
  setSelectedPhoto(photoData)
  console.log(photoData);
 };

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics}
      toggleModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal photoData={selectedPhoto} toggleModal={toggleModal}/>}
    </div>
  );
};

export default App;
