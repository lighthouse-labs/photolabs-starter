import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [photoModal, setPhotoModal] = useState(false)

  const showModalOnClick = () => setPhotoModal(!photoModal)
  
  return (
    <div className="App">
      <HomeRoute onClickPhoto={showModalOnClick}/>
      {photoModal && <PhotoDetailsModal onClickPhoto={showModalOnClick}/>}
    </div>
  );
};

export default App;
