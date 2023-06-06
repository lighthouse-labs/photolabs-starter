import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import axios from "axios";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { applicationState, reducer, onClosePhotoDetailsModal } =
    useApplicationData();

  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [state, dispatch] = useReducer(reducer, applicationState);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/photos")
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8001/api/topics")
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!selectedTopic) {
      axios
        .get("http://localhost:8001/api/photos")
        .then((res) => {
          setPhotos([...res.data]);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:8001/api/topics/photos/${selectedTopic}`)
        .then((res) => {
          setPhotos(res.data);
        })
        .catch((err) => console.log(err));
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
        favouritePhotos={state.favouritePhotos}
        showModal={state.showModal}
        dispatch={dispatch}
        selectTopic={selectTopic}
      />
      {state.showModal && (
        <PhotoDetailsModal
          imageContainerClassName="photo-list--item photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
          favouritePhotos={state.favouritePhotos}
          showModal={state.showModal}
          selectedPhoto={state.selectedPhoto}
          isFavourite={state.isFavourite}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default App;
