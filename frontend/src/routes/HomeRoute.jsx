import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
