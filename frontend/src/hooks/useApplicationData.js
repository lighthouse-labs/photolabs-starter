import { useState } from 'react'

export default function useApplicationData () {  
  
  const defaultState = {
    currentPhoto: undefined,
    likedPhotos: []
  }

  const [state, setState] = useState(defaultState)
  
  function setPhotoSelected(photo) {
    setState({
      ...state, 
      currentPhoto: photo
    });
  }

  function updateToFavPhotoIds(photoId) {
    if (!state.likedPhotos.includes(photoId)) {
      setState({...state, likedPhotos: [...state.likedPhotos, photoId]})
    } else {
      setState({...state, likedPhotos:[...state.likedPhotos].filter((id) => id !== photoId)})
    }
  }

  function onClosePhotoDetailsModal() {
    setState({...state, currentPhoto: undefined})
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

// function updateToFavPhotoIds(photoId) {
//   if (!state.likedPhotos.includes(photoId)) {
//     setState({...state, likedPhotos: [...state.likedPhotos, photoId]})
//   } else {
//     setState({...state, likedPhotos:[...state.likedPhotos].filter((id) => id !== photoId)})
//   }
// }