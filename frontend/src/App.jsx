import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
 import PhotoList from './components/PhotoList';
 import './App.scss';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<HomeRoute />} />
      </Routes>
      
    </Router>
  );
}

export default App;
