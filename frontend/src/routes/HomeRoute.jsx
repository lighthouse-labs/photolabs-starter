import React from "react";
import TopNavBar from "../components/TopNavigationBar"; // Import the TopNavBar component
import PhotoList from "../components/PhotoList"; // Import the PhotoList component
import "../styles/HomeRoute.scss"; // Import the styles for HomeRoute

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavBar /> {/* Render the TopNavBar component */}
      <PhotoList /> {/* Render the PhotoList component */}
    </div>
  );
};

export default HomeRoute;

