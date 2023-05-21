import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";

const App = () => {
  // const [favouritePhotos, dispatch] = useReducer((countFavourite, action) => {
  //   return countFavourite + action;
  // }, []);
  // console.log("favouritePhotos", favouritePhotos);
  

  return (
    <div className="App">
      <HomeRoute
        // favouritePhotos={favouritePhotos}
        // addFavouritePhoto={addFavouritePhoto}
      />
    </div>
  );
};

export default App;
