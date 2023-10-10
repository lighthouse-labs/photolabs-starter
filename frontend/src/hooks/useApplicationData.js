const { useReducer, useEffect } = require("react");

export const actions = {
  toggle_show_modal: 'toggle_show_modal',
  select_image: 'select_image',
  toggle_favourite: 'toggle_favourite',
  set_photo_data: 'set_photo_data', 
};

function reducer(state, action) {
  switch (action.type) {
    case actions.toggle_show_modal:
      return { ...state, showModal: !state.showModal };

    case actions.select_image:
      return { ...state, selectedImage: action.payload };

    case actions.toggle_favourite:
      return {
        ...state,
        favourites: state.favourites.includes(action.payload) 
          ? state.favourites.filter(favId => favId !== action.payload)
          : [...state.favourites, action.payload]
      };
      
    case actions.set_photo_data:
      return { ...state, photoData: action.payload };

    case actions.set_topic_data:
      return { ...state, topicData: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    showModal: false,
    selectedImage: {},
    favourites: [],
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
    .then(response => response.json())
    .then(data => dispatch({ type: actions.set_photo_data, payload: data }))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const homePhotos = () => {
    fetch('http://localhost:8001/api/photos')
    .then(response => response.json())
    .then(data => dispatch({ type: actions.set_photo_data, payload: data }))
    .catch(error => console.error('Error fetching data:', error))
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
    .then(response => response.json())
    .then(data => dispatch({ type: actions.set_topic_data, payload: data }))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

const showTopicPhotos = (id) => {
    fetch(`http://localhost:8001/api/topics/photos/${id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: actions.set_photo_data, payload: data }))
    .catch(error => console.error('Error fetching data:', error));
  }

  const toggleShowModal = () => {
    dispatch({ type: actions.toggle_show_modal });
  }

  const selectImage = (image) => {
    dispatch({ type: actions.select_image, payload: image });
  }

  const toggleFavourite = (id) => {
    dispatch({ type: actions.toggle_favourite, payload: id });
  }

  const isFavPhotoExist = () => {
    return state.favourites.length > 0 ? true : false;
  }

  return {
    state,
    toggleFavourite,
    isFavPhotoExist,
    toggleShowModal,
    selectImage,
    showTopicPhotos,
    homePhotos
  };
}

export default useApplicationData;

