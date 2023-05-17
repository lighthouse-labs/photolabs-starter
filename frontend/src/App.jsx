import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3);
  const photosArray = [];
  for (let i = 0; i < photos.length; i++) {
    photosArray.push(<PhotoListItem key={i} />);
  }

  return <div className="App">{photosArray}</div>;
};

export default App;
