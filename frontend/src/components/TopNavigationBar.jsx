import React from 'react';
import { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {

  const {favList} = props;
  const isFavPhotoExists = (favList.length)

  //handleclick to check if favList is built correctly
  const handleClick = () => {
    console.log('favList', favList)
  }

  return (
    <div className="top-nav-bar"> 
      <span className="top-nav-bar__logo" onClick={handleClick} >PhotoLabs</span>
      <TopicList />
      <FavBadge className="fav-badge__count"
        favList={props.favList}
        isFavPhotoExist={isFavPhotoExists}
      />
    </div>
  )
}

export default TopNavigationBar;