const addCategoryToPhotos = (photos, topics, id) => {
  const photosWithCategory = photos.map((photo) => {
    if (photo.id === topics.id) {
      return {
        ...photo,
        category: topics.title,
      };
    }
  });
  return photosWithCategory;
};

// const addFavoriteToPhotos = (photoArr, id) => {
//   const updatedPhotos = photoArr.map((photo) => {
//     if (Number(photo.id) === id) {
//       return { ...photo, isFavorite: true };
//     }
//     return { ...photo, isFavorite: false };
//   });
//   return updatedPhotos;
// };

export const addFavoriteToPhotos = (photoArr, photoId) => {
  const updatedArr = photoArr.map((photo) => {
    if (Number(photo.id) === Number(photoId)) {
      return { ...photo, isFavorite: true };
    } else {
      return { ...photo, isFavorite: false };
    }
  });

  return updatedArr;
};

export const checkFavorites = (photoArr) => {
  return photoArr.some((el) => el.isFavorite === true);
};

export const toggleFavorites = (photoArr, photoId) => {
  const updatedPhoto = { ...photoArr[photoId] };
  updatedPhoto.isFavorite = !updatedPhoto.isFavorite;

  const updatedPhotos = { ...photoArr, [photoId]: updatedPhoto };

  return updatedPhotos;
};
// export default { addFavoriteToPhotos };
