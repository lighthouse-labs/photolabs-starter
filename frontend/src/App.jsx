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

const photos = Array(3).fill(sampleDataForPhotoListItem);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos.map((photo, id) => (
        <PhotoListItem
          key={id}
          id={sampleDataForPhotoListItem.id}
          location={sampleDataForPhotoListItem.location}
          imageSource={sampleDataForPhotoListItem.imageSource}
          username={sampleDataForPhotoListItem.username}
          profile={sampleDataForPhotoListItem.profile}
        />
      ))}
    </div>
  );
};

export default App;
