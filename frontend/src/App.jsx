import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './styles/PhotoList.scss';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {

  const photos = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];

  return (
    <div className="App photo-list">
      {photos.map((photo) => 
       <PhotoListItem key={photo.id}
        imageSource={photo.imageSource}
        profile={photo.profile}
        username={photo.username}
        city={photo.location.city}
        country={photo.location.country}
      />
      )}
    </div>
  );
};

export default App;
