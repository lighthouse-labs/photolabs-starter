import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

//Sample data for the one photo list item
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

const App = () => {
  const photos = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];

  const photoList = photos.map((photo, index) =>
    <PhotoListItem
      key={index}
      sampleImage={photo}
    />
  )

  return (
    <div className="App">
      {photoList}
    </div>
  );
};

export default App;
