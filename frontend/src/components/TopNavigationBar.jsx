import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import DarkModeButton from './DarkModeButton';

const TopNavigationBar = (props) => {

  const { state, dispatch, darkModeValue } = props;

  const isFavPhotoExists = (state.favList.length)

  //can view all photos again after having selected a specific topic
  const homepageClick = () => {
    dispatch({ type: 'SET_SELECTED_TOPIC', payload: 0 })
  }

  return (
    <div className={`top-nav-bar ${darkModeValue}`}>
      <span className={`top-nav-bar__logo ${darkModeValue}`} onClick={homepageClick} >PhotoLabs</span>
      <TopicList 
        topicData={props.topicData}
        dispatch={props.dispatch}
        darkModeValue={props.darkModeValue}
      />
      <FavBadge className="fav-badge__count"
        favList={props.favList}
        isFavPhotoExist={isFavPhotoExists}
      />
      <DarkModeButton className={`${darkModeValue}`}
        darkMode={props.darkMode}
        dispatch={dispatch}
      />
    </div>
  )
}

export default TopNavigationBar;