import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import PhotoList from './components/PhotoList';
import HomeRoute from "./routes/HomeRoute";
const App = () => {
  const photoLists = [
    { id: 1, photos: Array.from({ length: 3 }) },
    { id: 2, photos: Array.from({ length: 5 }) },
    { id: 3, photos: Array.from({ length: 2 }) }
  ];

  return (
    <div className="App">
      <TopNavigationBar />
      {photoLists.map((list) => (
        <PhotoList key={list.id} photos={list.photos} />
      ))}
      {photoLists.map((list) => (
        list.photos.map((_, index) => (
          <PhotoListItem key={index} photoId={index} />
        ))
      ))}
      <HomeRoute />
    </div>
  );
};

export default App;
