import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
 

  return (
    <div className="App">
      {/* {new Array(3).fill(sampleDataForPhotoListItem).map((photoData, index) => (
        <PhotoListItem key={index} photoData={photoData} />
      ))} */}
      <PhotoList/>
    </div>
  );
};

export default App;
