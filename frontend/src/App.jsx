import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

const App = () => {
  // const [photoModal, setPhotoModal] = useState(false)

  //set the state to false which will close the modal that pops up when user clicks close
  // const closeModalPhoto = () => setPhotoModal(false)

  //track the current photo that is selected
  // const [currentPhoto, setCurrentPhoto] = useState()
  
  return (
    <div className="App">
      <HomeRoute 
      photos={photos}/>

      {/* {currentPhoto && <PhotoDetailsModal onClose={() => setCurrentPhoto(undefined)} photo={currentPhoto}/>} */}
    </div>
  );
};

export default App;
