import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({openModal}) => {

  return (
    <div className="home-route">
      < TopNavigation />
      < PhotoList openModal={openModal}/>
    </div>
  );
};

export default HomeRoute;
