import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: '1',
    location: {
      city: 'Montreal',
      country: 'Canada'
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: 'Joe Example',
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
  };

  return (
    <div className="App">
      {new Array(3).fill(sampleDataForPhotoListItem).map((photoData, index) => (
        <PhotoListItem key={index} photoData={photoData} />
      ))}
    </div>
  );
};

export default App;
