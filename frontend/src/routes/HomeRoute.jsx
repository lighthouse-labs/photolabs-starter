import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, openModal, topicData, photoData, handleFav, handleTopicSelect}) => {

  return (
    <div className="home-route">
      < TopNavigation topicData={topicData} state={state} photoData={photoData} handleTopicSelect={handleTopicSelect} />
      < PhotoList openModal={openModal} photoData={photoData} state={state} handleFav={handleFav} />
    </div>
  );
};

export default HomeRoute;
