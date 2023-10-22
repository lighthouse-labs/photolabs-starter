import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, openModal, topicData, photoData}) => {

  return (
    <div className="home-route">
      < TopNavigation topicData={topicData} state={state} />
      < PhotoList openModal={openModal} photoData={photoData} state={state} />
    </div>
  );
};

export default HomeRoute;
