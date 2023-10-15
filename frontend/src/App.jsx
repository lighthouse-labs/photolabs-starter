import React, { useReducer, createContext, useState, useEffect } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const favPhotos = [];

  return (
    <div className="App">
      < TopNavigation />
      <div className='home-route'>
          <PhotoList />
      </div>
    </div>
  );
};

export default App;