import React from 'react';
import { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {

  const { state } = props;

  const isFavPhotoExists = (state.favList.length)

  const homepageClick = () => {
    console.log('state.liked', state.liked)
  }

  return (
    <div className="top-nav-bar"> 
      <span className="top-nav-bar__logo" onClick={homepageClick} >PhotoLabs</span>
      <TopicList 
        topicData={props.topicData}
        dispatch={props.dispatch}
      />
      <FavBadge className="fav-badge__count"
        favList={props.favList}
        isFavPhotoExist={isFavPhotoExists}
      />
    </div>
  )
}

export default TopNavigationBar;