
import React, {useState} from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false); //Show and do not show modal
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);
  const [favoritedPhotoIds, setFavoritedPhotoIds] = useState([]);

  const toggleFavorite = (photoId) => {
    console.log("Toggling favorite for photo ID:", photoId);
    if (favoritedPhotoIds.includes(photoId)) {
      setFavoritedPhotoIds(favoritedPhotoIds.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotoIds([...favoritedPhotoIds, photoId]);
    }
  };

  //Showing and not showing the modals
  const openModal = (photoData) => {
    setSelectedPhotoData(photoData);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPhotoData(null);
    setModalVisible(false);
  };
  return (
    <div className="App">
      <HomeRoute openModal={openModal} closeModal={closeModal} isModalVisible={isModalVisible} favoritedPhotoIds={favoritedPhotoIds} setFavoritedPhotoIds={setFavoritedPhotoIds} toggleFavorite={toggleFavorite}/>
      {isModalVisible && <PhotoDetailsModal closeModal={closeModal} isModalVisible={isModalVisible} selectedPhotoData={selectedPhotoData} favoritedPhotoIds={favoritedPhotoIds} setFavoritedPhotoIds={setFavoritedPhotoIds} toggleFavorite={toggleFavorite}/>}
    </div>
  );
};

export default App;