import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//Code I wrote as part of the 
const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={props.isFavPhotoExist}/>
    </div>
  ) 
};

//The original code is here
// const FavBadge = ({ isFavPhotoExist }) => {
//   return (
//     <div className='fav-badge'>
//       <FavIcon displayAlert={!!isFavPhotoExist}/>
//     </div>
//   ) 
// };


export default FavBadge;