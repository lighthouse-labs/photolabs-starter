import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
 
 
  const toggleFavourite = props.toggleFavourite;
  const favourite = props.favourite;
  const photoId = props.photoId;
  const[selected, setSelected] = useState(favourite.includes(photoId));

  return (
    <div className="photo-list__fav-icon" onClick={() => {
      
      
      setSelected(favourite.includes(photoId)? false: true) 
    
      //setSelected(selected? false: true);  
      toggleFavourite(photoId);
   
      
     


      
    }}>
      <div>
       
        {/* Insert React */}
      
        <FavIcon selected={selected}   ></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;