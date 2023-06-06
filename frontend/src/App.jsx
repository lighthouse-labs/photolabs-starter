import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import axios from "axios";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    showModal,
    openModal,
    addToFavourite,
    favouritePhotos,
    selectedPhoto,
    setModalPhoto,
    closeModal,
  } = useApplicationData();

  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  // const [state, dispatch] = useReducer(reducer, applicationState);

  const baseUrl = "http://localhost:8001/api";

  useEffect(() => {
    axios
      .get(`${baseUrl}/photos`)
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => console.log("Error", err));

    axios
      .get(`${baseUrl}/topics`)
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  useEffect(() => {
    if (!selectedTopic) {
      axios
        .get(`${baseUrl}/photos`)
        .then((res) => {
          setPhotos([...res.data]);
        })
        .catch((err) => console.log("Error: ", err));
    } else {
      axios
        .get(`${baseUrl}/topics/photos/${selectedTopic}`)
        .then((res) => {
          setPhotos(res.data);
        })
        .catch((err) => console.log("Error: ", err));
    }
  }, [selectedTopic]);

  const selectTopic = (id) => {
    setSelectedTopic(id);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
        favouritePhotos={favouritePhotos}
        showModal={showModal}
        openModal={openModal}
        selectTopic={selectTopic}
        setModalPhoto={setModalPhoto}
        addToFavourite={addToFavourite}
      />
      {showModal && (
        <PhotoDetailsModal
          imageContainerClassName="photo-list--item photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
          favouritePhotos={favouritePhotos}
          showModal={showModal}
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          photos={photos}
          addToFavourite={addToFavourite}
        />
      )}
    </div>
  );
};

export default App;
