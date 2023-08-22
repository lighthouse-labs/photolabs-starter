import React from 'react';


// Styling
import '../styles/FavBadge.scss';

// Components
import FavIcon from './FavIcon';


const FavBadge = (props) => {

  const { handleShowFavsClick, favPhotosExist } = props;

  return (
    <div className='fav-badge'>

      <FavIcon handleShowFavsClick={handleShowFavsClick} fill={favPhotosExist ? "#C80000" : "#FFFFFF"} displayAlert={!!favPhotosExist}/>
      
    </div>
  );
};


export default FavBadge;