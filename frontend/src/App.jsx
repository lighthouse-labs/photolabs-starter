import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {
  // const photos = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];


  //Code from before Building PhotoList
  // const photoList = photos.map((photo, index) =>
  //   <PhotoListItem
  //     key={index}
  //     sampleImage={photo}
  //   />
  // )

  return (
    <div className="App">
      {}
      <PhotoList />
    </div>
  );
};

export default App;
