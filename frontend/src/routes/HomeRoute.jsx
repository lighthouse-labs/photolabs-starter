import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favourite={props.favourite} get_photo_by_topics={props.get_photo_by_topics} setSidePeekForLikedPhotos={props.setSidePeekForLikedPhotos} />
      <PhotoList photos={props.photos} favourite={props.favourite} toggleFavourite={props.toggleFavourite}  setSidePeek={props.setSidePeek} sidePeek={props.sidePeek} setSampleDataForPhotoListItem={props.setSampleDataForPhotoListItem}  setSidePeekForLikedPhotos={props.setSidePeekForLikedPhotos}  />
    </div>
  );
};

export default HomeRoute;
