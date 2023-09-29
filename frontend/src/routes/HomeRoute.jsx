import React from 'react';
import TopNavBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList'; // Import TopicList
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => { // Accept props as an argument
  return (
    <div className="home-route">
      <TopNavBar topics={props.topics}/>{/* Pass the topics prop */}
      <PhotoList photos={props.photos} /> {/* Pass the photos prop */}
    </div>
  );
};

export default HomeRoute;

