import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';

import './styles/PhotoList.scss';
import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];

  return (
    <div className="App">
      <TopNavigationBar />
      {/* {Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } as an alternative*/}
      {/* {photos.map((photo) => 
       <PhotoListItem key={photo.id}
        imageSource={photo.imageSource}
        profile={photo.profile}
        username={photo.username}
        city={photo.location.city}
        country={photo.location.country}
      />
      )} */}
      <PhotoList />
    </div>
  );
};

export default App;
