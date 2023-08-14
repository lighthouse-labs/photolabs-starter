
import React, {useState} from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false); //Show and do not show modal
  // const [largerImageUrl, setLargerImageUrl] = useState(''); //Set larger image url for modal click

  //Showing and not showing the modals
  const openModal = () => {
    setModalVisible(true);
    // setLargerImageUrl(urls.full);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {isModalVisible && <PhotoDetailsModal />}
    </div>
  );
};

export default App;