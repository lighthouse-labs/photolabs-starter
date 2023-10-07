
import { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

// Define your reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.payload.id],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter((id) => id !== action.payload.id),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.photos,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topics,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhotoId: action.payload.id,
        selectedPhotoData: action.payload.photoData,
        similarPhotosData: action.payload.similarPhotosData,
        modalVisible: true,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modalVisible: false,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    photoData: [], // Placeholder for photo data
    topicData: [], // Placeholder for topic data
    likedPhotos: [],
    alert: false,
    modalVisible: false,
    selectedPhotoId: null,
    selectedPhotoData: null,
    similarPhotosData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const transformPhotoData = (photoData) => {
    return photoData.map((photo) => {
      return {
        id: photo.id,
        location: {
          city: photo.location.city,
          country: photo.location.country,
        },
        urls: {
          full: photo.urls.full,
          regular: photo.urls.regular,
        },
        user: {
          id: photo.user.id,
          username: photo.user.username,
          name: photo.user.name,
          profile: photo.user.profile,
        },
        similarPhotoIds: photo.similar_photos, // Example similar photo IDs
      };
    });
  };

  const transformTopicData = (topicData) => {
    return topicData.map((topic) => {
      return {
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
      };
    });
  };

  const toggleLike = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const handlePhotoClick = (id) => {
    const selectedPhoto = state.photoData.find((photo) => photo.id === id);
    const photoData = {
      id: selectedPhoto.id,
      imageSource: selectedPhoto.urls.regular,
      username: selectedPhoto.user.username,
      location: selectedPhoto.location,
      profile: selectedPhoto.user.profile,
      isLiked: state.likedPhotos.includes(selectedPhoto.id),
      alert: state.alert,
      setAlert: () => {}, // You can pass a placeholder function here
      setModalVisible: () => {}, // You can pass a placeholder function here
      similarPhotos: selectedPhoto.similarPhotoIds || [],
    };
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { id, photoData } });
  };

  const openPhotoModal = (id, photoData) => {
    // Fetch actual similar photo data based on IDs (replace with actual fetching logic)
    selectedPhot=state.photoData.find((photo) => photo.id === id);
    const similarPhotosData = selectedPhot.similarPhotoIds || [];
    console.log('simliarphoto and selected',[selectedPhot,similarPhotosData]);
    // Dispatch action to select a photo and display details
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { id, photoData, similarPhotosData },
    });
  };

  const closeModal = () => {
    // Dispatch action to close the modal
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  useEffect(() => {
    // Fetch photo data from the API on port 8001
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: transformPhotoData(data) },
        });
      });

    // Fetch topic data from the API on port 8001 (similar process)
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: transformTopicData(data) },
        });
      });
  }, []);
  console.log('state',state);
  return {
    ...state,
    toggleLike,
    handlePhotoClick,
    openPhotoModal,
    closeModal,
  };
};

export default useApplicationData;
