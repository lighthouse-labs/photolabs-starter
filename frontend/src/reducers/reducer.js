export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_FAV_NOTIFICATION: 'ADD_FAV_NOTIFICATION',
  SET_CURRENT_TOPIC: 'SET_CURRENT_TOPIC',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SHOW_FAVORITES: 'SHOW_FAVORITES',
  HIDE_FAVORITES: 'HIDE_FAVORITES',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.OPEN_MODAL: {
    return { ...state, isModalOpen: true, selectedPhoto: action.payload };
  }
  case ACTIONS.CLOSE_MODAL: {
    return { ...state, isModalOpen: false, selectedPhoto: null };
  }
  case ACTIONS.FAV_PHOTO_ADDED: {
    return { ...state, favorites: new Set([...state.favorites, action.payload]) };
  }
  case ACTIONS.FAV_PHOTO_REMOVED: {
    return {...state, favorites: new Set([...state.favorites].filter(item => item !== action.payload)) };
  }
  case ACTIONS.ADD_FAV_NOTIFICATION: {
    return {...state, displayAlert: state.favorites && state.favorites.size > 0 };
  }
  case ACTIONS.SET_PHOTO_DATA: {
    return {...state, photos: action.payload };
  }
  case ACTIONS.SET_TOPIC_DATA: {
    return {...state, topics: action.payload };
  }

  case ACTIONS.SET_CURRENT_TOPIC: {
    return {...state, currentTopic: action.payload };
  }

  case ACTIONS.SET_SEARCH_TERM: {
    return {...state, searchTerm: action.payload };
  }

  case ACTIONS.SHOW_FAVORITES: {
    return {...state, displayFavorites: true };
  }

  case ACTIONS.HIDE_FAVORITES: {
    return {...state, displayFavorites: false };
  }

  case ACTIONS.TOGGLE_DARK_MODE: {
    return {...state, darkMode: state.darkMode ? false : true};
  }


  default: {
    return state;
  }
  }
};

export default reducer;