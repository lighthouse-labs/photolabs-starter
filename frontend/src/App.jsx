import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';

import PhotoList from 'components/PhotoList';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
// const App = () => {
//   const photos = new Array(3).fill(sampleDataForPhotoListItem)
//   return (
//     <div className="App">
//       {photos.map((photo, index) => (
//       <PhotoListItem key={index}{...photo} />
//      ))}  
//     </div>
//   );
// };

const App = () => {

  return (
  <div className="App">
    
    <HomeRoute />
    

  </div>
  );
};

export default App; 
