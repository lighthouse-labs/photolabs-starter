import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
// import { sampleDataForPhotoList } from './components/PhotoListItem';

const sampleDataForPhotoList = {
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
  //making PhotoListItem to be displayed 3 times
  const photos = new Array(3).fill(sampleDataForPhotoList);
  return (
    <div className="App">
      {photos.map((photoData, index) => (
        <div key={index}>
          <PhotoListItem photo={photoData} />
          <PhotoFavButton />
          </div>
        ))}
      {/* <PhotoList/> */ }
    </div>
  );
};

export default App;
