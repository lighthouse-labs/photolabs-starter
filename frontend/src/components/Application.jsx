import React, {useState} from 'react';
import HomeRoute from './HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../App.scss';
import useApplicationData from '../hooks/useApplicationData';

export default function Application(props) {

  
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
}