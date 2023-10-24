import { useState } from "react";


function useApplicationData() {

  const [state, setState] = useState({
    favList: [],
    liked: {},
    showModal: null
  });

  //toggles liked state of each photo
  function setLiked(photoId) {
    setState(prevState => ({
      ...prevState,
      liked: {
        ...prevState.liked,
        [photoId]: !prevState.liked[photoId]
      }
    }))
  };
  
  //builds favList array
  function setFavList(id) {
    let finalFavList = [];
    if (state.favList.includes(id)) {
      finalFavList = state.favList.filter(photo => photo !== id)
    } else {
      finalFavList = [...state.favList, id]
    }
    setState(prevState => ({
      ...prevState,
      favList: finalFavList
    }));
  }

  //handles the close button of the modal
  function setShowModal(modalToggle) {
    setState(prevState => ({
      ...prevState,
      showModal: modalToggle
    }));
  }

  return { state, setLiked, setFavList, setShowModal };

  };

export default useApplicationData;