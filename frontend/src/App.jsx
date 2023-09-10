import React from 'react';


import './App.scss';

import HomeRoute from 'routes/HomeRoute';


const App = () => {
  console.log("App is rendering");
  return (
  <div className="App">
    
    <HomeRoute />
    

  </div>
  );
};

export default App; 
