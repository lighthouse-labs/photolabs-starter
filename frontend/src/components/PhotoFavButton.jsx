import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({displayAlert, selected}) => {
  const [fav, setFav] = useState(false);

  const handleFav = useCallback(() => {
    setFav(!fav);
  }, [fav]);

  return (
    <div className={fav ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon'} onClick={handleFav}>
      <FavIcon
        displayAlert={displayAlert}
        selected={selected}
      />
    </div>
  );
}

export default PhotoFavButton;