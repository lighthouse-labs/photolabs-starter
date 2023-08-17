import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';
import PhotoFavButton from './PhotoFavButton';


const TopNavigation = () => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <div className='top-nav-bar'>
          <TopicList />
          <FavIcon/>
        </div>
    </div>
  )
}


// const TopNavigation = () => {
//   return (
//     <div className="top-nav-bar">
//       <span className="top-nav-bar__logo">PhotoLabs</span>
//         <div className='top-nav-bar'>
//           <TopicList />
//           <FavIcon />
//         </div>
//     </div>
//   )
// }

export default TopNavigation;