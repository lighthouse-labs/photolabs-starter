import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';


// Note: Rendering a single component to build components in isolation

const HomeRoute = (props) => {

  const {liked, toggleLike, photos, topics, onTopicClick, toggleModal} = props;

  return (
    <div className="home-route">
      <TopNavigation notifications={liked} topics={topics} onTopicClick={ onTopicClick} toggleModal={toggleModal}/>
      <PhotoList liked={liked} toggleLike={toggleLike} toggleModal={(photoId) => {toggleModal(photoId)}} photos={photos}/>
    </div>
  );
};

export default HomeRoute;