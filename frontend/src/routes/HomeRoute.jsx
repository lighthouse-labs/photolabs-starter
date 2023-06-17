import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


// takes props from App.jsx
const HomeRoute = (props) => {
  const {
    topics,
    photos,
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
      />
      <PhotoList
        photos={photos}
      />
     
    </div>
  );
};

export default HomeRoute;