const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTO_DATA":
      const photos = {
        ...state,
        photos: action.payload,
      };
      return photos;
    case "SET_TOPIC_DATA":
      const topics = {
        ...state,
        topics: action.payload,
      };
      return topics;
    case "SELECT_PHOTO":
      //   console.log("state.photos", state.photos);
      //   console.log("state.photos", state.photos);
      const selected = state.photos.filter((photo) => {
        return photo.id === action.payload;
      });
      console.log("selected", selected);
      if (!state.showModal) {
        return {
          ...state,
          showModal: !state.showModal,
          selectedPhoto: selected.length > 0 ? selected : "",
        };
      }
    case "FAV_PHOTO_ADDED":
      const likedPhoto = state.photos.find((photo) => {
        return photo.id === action.payload;
      });

      const removedFromFavourite = state.favouritePhotos.filter((photo) => {
        return photo.id !== action.payload;
      });

      const foundPhoto = state.favouritePhotos.find((favouritePhoto) => {
        return likedPhoto.id === favouritePhoto.id;
      });

      if (!foundPhoto) {
        return {
          ...state,
          // isFavourite: !state.isFavourite,
          favouritePhotos: [...state.favouritePhotos, likedPhoto],
        };
      } else {
        return {
          ...state,
          // isFavourite: !state.isFavourite,
          favouritePhotos: removedFromFavourite,
        };
      }
    case "CLOSE_MODAL":
      if (state.showModal) {
        return {
          ...state,
          showModal: false,
          selectedPhoto: null,
        };
      }
    default:
      return state;
  }
};

export default reducer;
