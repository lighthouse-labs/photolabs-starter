import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const[selected, setSelected] = useState(false);
 
  const toggleFavourite = props.toggleFavourite;
  const favourite = props.favourite;
  const photoId = props.photoId;
  return (
    <div className="photo-list__fav-icon" onClick={() => {
      toggleFavourite(photoId);
      
      setSelected(favourite.includes(photoId)? true: false) 
    
      setSelected(selected? false: true);  
   
      
     


      
    }}>
      <div>
       
        {/* Insert React */}
        <FavIcon selected={selected} ></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;