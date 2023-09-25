import ACTIONS from "./helper-actions";

//reducer function that sets state
const reducer = function(state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favPhotos: [...state.favPhotos, action.value] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favPhotos: state.favPhotos.filter((favPhoto) => favPhoto.id !== action.id),
    };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, showPhotoDetails: [action.photoDetails] };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return { ...state, showModal: action.value };
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.value };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.value };
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return { ...state, topicId: action.id };
  case ACTIONS.GET_ALL_FAV_PHOTOS:
    return { ...state, favPhotos: action.value};
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

export default reducer;