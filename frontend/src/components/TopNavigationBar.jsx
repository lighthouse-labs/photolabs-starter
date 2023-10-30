import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import DarkIcon from './DarkIcon';
import DarkModeButton from './DarkModeButton';

const TopNavigationBar = (props) => {

  const { state, dispatch } = props;

  const isFavPhotoExists = (state.favList.length)

  //can view all photos again after having selected a specific topic
  const homepageClick = () => {
    dispatch({ type: 'SET_SELECTED_TOPIC', payload: 0 })
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
      <DarkModeButton className="dark-mode"
        darkMode={props.darkMode}
        dispatch={dispatch}
      />
    </div>
  )
}

export default TopNavigationBar;