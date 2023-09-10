import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';


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
    <TopNavigationBar />
    
    <PhotoList />

  </div>
  );
};

export default App; 
