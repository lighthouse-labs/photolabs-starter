import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(null);
  const handleClose = () => {
    setModal(null);
  };
  const handleClick = ({id, city, country, full, profile, name, regular, setFavorites, removeFromFavorites}) => {
    setModal(<PhotoDetailsModal
      id={id}
      city={city}
      country={country}
      full={full}
      profile={profile}
      name={name}
      regular={regular}
      onClick={handleClose}
    />);
  };
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onClick={handleClick} />
      {modal}
    </div>
  );
};

export default App;
