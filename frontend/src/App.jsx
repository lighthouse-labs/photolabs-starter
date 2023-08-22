import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

const App = () => {
  const [photoModal, setPhotoModal] = useState(false)

  const closeModalPhoto = () => setPhotoModal(false)
  
  return (
    <div className="App">
      <HomeRoute 
      photos={photos}
      onClickPhoto={(photo) => setPhotoModal(photo)}/>

      {photoModal && <PhotoDetailsModal 
      onClose={closeModalPhoto}
      />}
    </div>
  );
};

export default App;
