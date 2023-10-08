import { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

// Define reducer function
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

    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload.photos,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
//intilizing 
const useApplicationData = () => {
  const initialState = {
    photoData: [], // Placeholder for photo data
    topicData: [], 
    likedPhotos: [],
    alert: false,
    modalVisible: false,
    selectedPhotoId: null,
    selectedPhotoData: null,
    similarPhotosData: [],
    selectedTopic: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
//functions for managing data
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
    
    const selectedPhoto = state.photoData.find((photo) => photo.id === id);
    const similarPhotosData = selectedPhoto.similarPhotoIds || [];
    console.log('similarphoto and selected', [selectedPhoto, similarPhotosData]);
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

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: { photos: transformPhotoData(data) } });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
      });
  };

  useEffect(() => {
    // Fetch all photos initially
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: transformPhotoData(data) } })
      })
      .catch((error) => {
        console.error("Error fetching all photos:", error);
      });
    }, []);
    useEffect(() => {
    // Fetch topic data initially
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } });
      })
      .catch((error) => {
        console.error("Error fetching topic data:", error);
      });
  }, []);

  console.log('state', state);
  return {
    ...state,
    toggleLike,
    handlePhotoClick,
    openPhotoModal,
    closeModal,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
