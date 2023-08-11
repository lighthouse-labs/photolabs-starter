
import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

const App = () => (
  <div className="App">
    <TopNavigationBar />
    <PhotoList />
  </div>
);

export default App;