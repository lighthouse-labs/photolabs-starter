import React from 'react';

import PhotoListItem from './components/PhotoListItem';
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
  const {
    id,
    location:{city, country},
    imageSource,
    username,
    profile,
  } = sampleDataForPhotoListItem;
  const photos = [];
  for (let i = 0; i < 3; i++) {
    photos.push(
      <PhotoListItem
        key={i}
        id={id}
        city={city}
        country={country}
        imageSource={imageSource}
        username={username}
        profile={profile}/>
    );
  }
  return (
    photos
  );
};

export default App;
