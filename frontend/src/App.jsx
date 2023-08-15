import React from 'react';
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

console.log(sampleDataForPhotoListItem)

const App = () => {
    
  return (
    <div className="App">
      <PhotoListItem sampleImage={sampleDataForPhotoListItem}/>
    </div>
  );
};

export default App;
