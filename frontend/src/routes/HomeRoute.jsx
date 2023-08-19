import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={props.topics} favourite={props.favourite}/>
      <PhotoList photos={props.photos} favourite={props.favourite} toggleFavourite={props.toggleFavourite}  setSidePeek={props.setSidePeek} sidePeek={props.sidePeek} setSampleDataForPhotoListItem={props.setSampleDataForPhotoListItem} Clickable={true}  />
    </div>
  );
};

export default HomeRoute;
