import { useState } from "react";

const useIsFav = function() {
  const [isFav, setIsFav] = useState(false);
  
  const handleFavClick = ()=> { 
    {isFav === true ? setIsFav(false) : setIsFav(true)}
  };

  return {isFav, handleFavClick}
};

export default useIsFav;