import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import "./styles/PhotoList.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const renderedPhotos = [
    <PhotoListItem key={0} photoListData={sampleDataForPhotoListItem} />,
    <PhotoListItem key={1} photoListData={sampleDataForPhotoListItem} />,
    <PhotoListItem key={2} photoListData={sampleDataForPhotoListItem} />,
  ];

  return <div className="App photo-list">{renderedPhotos}</div>;
};

export default App;
