import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import DarkMode from 'components/DarkMode';


const HomeRoute = (props) => {

  return (
    <div className={props.darkMode ? "home-route-dark-mode" : "home-route-light-mode"}>
      <div className='top-nav-bar'>
        <TopNavigation homePhotos={props.homePhotos} darkMode={props.darkMode}/>
        <TopicList topicData={props.topicData} showTopicPhotos={props.showTopicPhotos} darkMode={props.darkMode}/>
        <div className='right-icons'>
          <FavBadge isFavPhotoExist={props.isFavPhotoExist()} favourites={props.  favourites} darkMode={props.darkMode}/>
          <DarkMode switchMode={props.switchMode} darkMode={props.darkMode}/>
        </div>
      </div>
      <PhotoList setShowModal={props.setShowModal} favourites={props.favourites} toggleFavourite={props.toggleFavourite} setSelectedImage={props.setSelectedImage}  photoData={props.photoData} darkMode={props.darkMode}/>
    </div>
  );
};

export default HomeRoute;
