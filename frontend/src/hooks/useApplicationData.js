import { useState } from 'react';
import { useReducer } from 'react';

//Add level actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

// Refactoring using useState =>
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorite: [...state.favorite, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state, favorite: state.favorite.filter(id => id !== action.payload)
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: action.payload };
    default:
      return state;
  }
};

export const useApplicationData = () => {
  const initialState = {
    favorite: [],
    displayModal: false
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = id => {
    const actionType = state.favorite.includes(id);
    if (actionType) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id })
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id })
    }
  };


  const updateDisplayModal = (props) => {
    const modalState = state.displayModal ? false : props;
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: modalState });
  };
  // return { ...state, toggleFavorite, updateDisplayModal }
  return { favorite: state.favorite, displayModal: state.displayModal, toggleFavorite, updateDisplayModal };
};


// export const useApplicationData = () => {

//   //Favotires
//   const [favorite, setFavorite] = useState([]);

//   const toggleFavorite = (id) => {
//     setFavorite((presentFavorites) => {
//       if (presentFavorites.includes(id)) {
//         return presentFavorites.filter(favoriteId => favoriteId !== id);
//       } else {
//         return [...presentFavorites, id]
//       }
//     })
//   }

//   //DisplayModal
//   const [displayModal, setDisplayModal] = useState(false);

//   const updateDisplayModal = (props) => {
//     const modalProps = { ...props, modalState: true };
//     displayModal ? setDisplayModal(false) : setDisplayModal(modalProps);
//   }

//   return { favorite, toggleFavorite, displayModal, updateDisplayModal };
// };