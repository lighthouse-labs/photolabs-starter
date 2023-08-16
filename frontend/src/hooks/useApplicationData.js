import { useReducer } from 'react';

const initialState = {
  isModalVisible: false,
  selectedPhotoData: null,
  favoritedPhotoIds: [],
};

const reducer = (state, action) => {
  const actionHandlers = {
    TOGGLE_FAVORITE: () => {
      const photoId = action.photoId;
      if (state.favoritedPhotoIds.includes(photoId)) {
        return {
          ...state,
          favoritedPhotoIds: state.favoritedPhotoIds.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...state,
          favoritedPhotoIds: [...state.favoritedPhotoIds, photoId],
        };
      }
    },
    OPEN_MODAL: () => ({
      ...state,
      selectedPhotoData: action.photoData,
      isModalVisible: true,
    }),
    CLOSE_MODAL: () => ({
      ...state,
      selectedPhotoData: null,
      isModalVisible: false,
    }),
    default: () => state,
  };

  const handler = actionHandlers[action.type] || actionHandlers.default;
  return handler();
};

const useApplicationData = ()=> {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', photoId });
  };

  const openModal = (photoData) => {
    dispatch({ type: 'OPEN_MODAL', photoData });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return {
    ...state,
    toggleFavorite,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
