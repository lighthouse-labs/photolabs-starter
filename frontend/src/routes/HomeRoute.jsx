import React, { useState, useReducer } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";
import PhotoFavButton from "../components/PhotoFavButton";

const HomeRoute = (props) => {
  const [favouritePhoto, setFavouritePhoto] = useState([]);
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = (e) => {
    //   console.log("e.target", e.target);
    //   // handleIconClick();
    // setFavouritePhoto(...favouritePhoto);
    setIsFav(!isFav);
    //   if (!fav) {
    //     dispatch(1);
    //   } else {
    //     dispatch(-1);
    //   }
  };

  return (
    <div className="home-route">
      {/* <TopNavigationBar countFavourite={props.countFavourite} />
      <PhotoList dispatch={props.dispatch} handleFavClick={handleFavClick} /> */}
      <PhotoFavButton handleFavClick={handleFavClick} isFav={isFav} />
    </div>
  );
};

export default HomeRoute;
