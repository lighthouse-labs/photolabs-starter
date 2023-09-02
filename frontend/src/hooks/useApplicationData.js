import { useReducer } from 'react'

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export default function useApplicationData () {  
  const defaultState = {
    currentPhoto: undefined, 
    likedPhotos: []
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  //outline what the reducer function should be 
  function reducer(state, action){
    switch(action.type) {
      case "FAV_PHOTO_ADDED": 
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, action.payload] 
      }
      case "FAV_PHOTO_REMOVED": 
        return {
          ...state,
          likedPhotos: [...action.payload]
        }
      case "SET_PHOTO_DATA":
        return {

        }
      case "SET_TOPIC_DATA":
        return {

        }
      case "SELECT_PHOTO":
        return {
          ...state,
          currentPhoto: action.payload
        } 
      case "DISPLAY_PHOTO_DETAILS":
        return {

        }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  
  function setPhotoSelected(photo) {
    dispatch({type: ACTIONS.SELECT_PHOTO,
              payload: photo
    })
  }

  function updateToFavPhotoIds(photoId) {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED,
                payload: [...state.likedPhotos].filter((id) => id !== photoId)
      
      })
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, 
                payload: photoId})
    }
  }

  function onClosePhotoDetailsModal() {
    dispatch({type: ACTIONS.SELECT_PHOTO,
              payload: undefined
    })
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}
