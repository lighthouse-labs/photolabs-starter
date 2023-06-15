import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = Array.from({ length: 3 });

  return (
    <div>
      {photos.map((_, index) => (
        <PhotoListItem key={index} />
      ))}
    </div>
  );
};

export default App;