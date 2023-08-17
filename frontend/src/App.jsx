import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';

const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );

  // const photos = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];

  //Code from before Building PhotoList
  // const photoList = photos.map((photo, index) =>
  //   <PhotoListItem
  //     key={index}
  //     sampleImage={photo}
  //   />
  // )

};

export default App;
