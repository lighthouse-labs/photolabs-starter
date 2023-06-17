import React from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos.js";
import topics from "./mocks/topics.js";
import "./App.scss";

// App component
const App = () => {
  return (
    <div className="App">
      {/* Top navigation bar component */}
      <TopNavigationBar />
      
      {/* Home route component */}
      {/* Passing topics and photos as props */}
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
