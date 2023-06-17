import React, { useState } from "react";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { onFavorited } = props;
  const [filled, setFilled] = useState(false);

  const handleFavClick = () => {
    console.log("fav icon was clicked");
    setFilled((prevFilled) => {
      // Toggle the filled state by negating the previous filled value
      const newState = !prevFilled;

      // Call the onFavorited callback with the new state value
      onFavorited(newState);

      // Return the new state value to update the filled state
      return newState;
    });
  };

  return (
    <div>
      {/* Render the FavIcon component, passing the filled state and the handleFavClick function */}
      <FavIcon filled={filled} onClick={handleFavClick} />
    </div>
  );
}

export default PhotoFavButton;
