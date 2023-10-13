import React from 'react';

import './App.scss';
import HomeRoute from './components/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
