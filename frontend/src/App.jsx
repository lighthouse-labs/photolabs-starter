import React, { useEffect } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import { useApplicationData } from 'hooks/useApplicationData'
import TopNavigationBar from './components/TopNavigationBar';

const App = () => {

  //Dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("Dark/Light clicked");
    setDarkMode(prevMode => !prevMode);
  };

  //Persiting Dark Mode
  // localStorage stores true/false toggling dark/light modes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

   //Favorites and DisplayModal moved to Custom Hook useApplicationData

  //Importing useApplicationData custom hook
  const { favorite, toggleFavorite, displayModal, updateDisplayModal, photoData, topicData, handleTopicClick, photoByTopic } = useApplicationData();

  return (

    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>

      <TopNavigationBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        topics={topicData}
        photoByTopic={photoByTopic}
        favorite={favorite}
      />

      <HomeRoute
        photos={photoData}
        topics={topicData}
        updateDisplayModal={updateDisplayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        handleTopicClick={handleTopicClick}
        photoByTopic={photoByTopic} />


      {displayModal && <PhotoDetailsModal
        updateDisplayModal={updateDisplayModal}
        displayModal={displayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite} 
        darkMode={darkMode}/>}
    </div>
  );
};

export default App;
