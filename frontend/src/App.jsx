import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import PhotoList from './components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = Array.from({ length: 3 });
  
  <div className="App">
     <TopNavigationBar />
   </div>
   
  return (
    <div>
      {photos.map((_, index) => (
        <PhotoListItem key={index} />
      ))}
    </div>
  );
};

export default App;