import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photos = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "New York",
      country: "USA",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Alice Smith",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Paris",
      country: "France",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "John Doe",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
];
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.imageSource}
          username={photo.username}
          location={photo.location}
          profile={photo.profile}
        />
      ))}
    </div>
  );
};

export default App;
