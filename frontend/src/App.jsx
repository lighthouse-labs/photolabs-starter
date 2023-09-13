import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';


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

// const photos = new Array(3).fill({ ...sampleDataForPhotoListItem });
//arrow function: need to use parentheses for an object literal

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {photos.map((photo, index) => (
        <PhotoListItem key={index} data={photo} />
      ))} */}
      <PhotoList />
    </div>
  );
};

export default App;
