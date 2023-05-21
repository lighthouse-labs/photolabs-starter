import React, { useReducer } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";

const App = () => {
  const [favouritePhotos, dispatch] = useReducer((countFavourite, action) => {
    return countFavourite + action;
  }, []);
  console.log("favouritePhotos", favouritePhotos);

  return (
    <div className="App">
      <HomeRoute favouritePhotos={favouritePhotos} dispatch={dispatch} />
    </div>
  );
};

export default App;
