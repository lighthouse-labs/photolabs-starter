import { useReducer, useEffect } from 'react'; // Import useReducer and useEffect
import mockPhotos from '../mocks/photos.js';
import mockTopics from '../mocks/topics.js';

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

// Define your reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // Insert logic for adding a favorite photo to state
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.payload.id],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      // Insert logic for removing a favorite photo from state
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter((id) => id !== action.payload.id),
      };

    case ACTIONS.SET_PHOTO_DATA:
      // Insert logic for setting photo data
      return {
        ...state,
        transformedPhotos: action.payload.photos,
      };

    case ACTIONS.SET_TOPIC_DATA:
      // Insert logic for setting topic data
      return {
        ...state,
        transformedTopics: action.payload.topics,
      };

    case ACTIONS.SELECT_PHOTO:
      // Insert logic for selecting a photo
      return {
        ...state,
        selectedPhotoId: action.payload.id,
        selectedPhotoData: action.payload.photoData,
        similarPhotosData: action.payload.similarPhotosData,
        modalVisible: true,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // Insert logic for displaying photo details
      return {
        ...state,
        modalVisible: false,
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  // Initialize your initial state here
  const initialState = {
    transformedPhotos: [],
    transformedTopics: [],
    likedPhotos: [],
    alert: false,
    modalVisible: false,
    selectedPhotoId: null,
    selectedPhotoData: null,
    similarPhotosData: [],
  };

  // Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to transform photo data
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
        similarPhotoIds: [2, 3, 4, 5], // Example similar photo IDs
      };
    });
  };

  // Function to transform topic data
  const transformTopicData = (topicData) => {
    return topicData.map((topic) => {
      return {
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
      };
    });
  };

  useEffect(() => {
    // Simulate fetching data from files or an API
    const fetchAndTransformData = async () => {
      // Simulate fetching data (replace with actual fetching logic)
      const photoData = mockPhotos; // Replace with actual photo data fetching
      const topicData = mockTopics; // Replace with actual topic data fetching

      const transformedPhotos = transformPhotoData(photoData);
      const transformedTopics = transformTopicData(topicData);

      // Dispatch actions to update state
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: transformedPhotos } });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: transformedTopics } });
    };

    fetchAndTransformData();
  }, []);

  // Function to toggle liked photos
  const toggleLike = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  // Function to open the photo modal
  const openPhotoModal = (id, photoData) => {
    // Fetch actual similar photo data based on IDs (replace with actual fetching logic)
    const similarPhotoIds = photoData.similarPhotos || [];
    const similarPhotosData = similarPhotoIds.map((id) =>
      state.transformedPhotos.find((photo) => photo.id == id)
    );
    console.log('data',similarPhotosData)
    // Dispatch action to select a photo and display details
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { id, photoData, similarPhotosData },
    });
  };

  // Function to close the photo modal
  const closeModal = () => {
    // Dispatch action to close the modal
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  // Other functions and state updates related to your application's logic

  return {
    ...state,
    toggleLike,
    openPhotoModal,
    closeModal,
  };
};

export default useApplicationData;
