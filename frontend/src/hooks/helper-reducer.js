//reducer function that sets state
const reducer = function(state, action) {
  switch (action.type) {
  case "FAV_PHOTO_ADDED":
    return { ...state, favPhotos: [...state.favPhotos, action.id] };
  case "FAV_PHOTO_REMOVED":
    return {
      ...state,
      favPhotos: state.favPhotos.filter((favId) => favId !== action.id),
    };
  case "SELECT_PHOTO":
    return { ...state, showPhotoDetails: [action.photoDetails] };
  case "DISPLAY_PHOTO_DETAILS":
    return { ...state, showModal: action.value };
  case "SET_PHOTO_DATA":
    return { ...state, photoData: action.value };
  case "SET_TOPIC_DATA":
    return { ...state, topicData: action.value };
  case "GET_PHOTOS_BY_TOPICS":
    return { ...state, topicId: action.id };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

export default reducer;