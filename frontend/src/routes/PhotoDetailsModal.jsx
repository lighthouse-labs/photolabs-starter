import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({
  closeModal,
  clickedPhoto,
  isFavourite,
  selectedPhotoHandler,
  photos,
  selectedPhoto,
  setModalHandler,
  setClickedPhoto
}) => {
  //function to get the similar photos
  const getSimilarPhotos = (arr, id) => {
    //manipulating the similar photos to obtain an array ofthe details
    const found = Object.values(arr.find((item) => item.id === id).similar_photos);
    return found;
  };

  const similarPhotos = getSimilarPhotos(photos, clickedPhoto.id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFavourite={isFavourite(clickedPhoto.id)}
          clickHandler={() => {
            selectedPhotoHandler(clickedPhoto.id);
          }}
        />
        <img
          src={clickedPhoto.urls.full}
          alt="profile image"
          className="photo-details-modal__image"
        />
        <div className="photo-list__user-details">
          <div>
            <img
              src={clickedPhoto.user.profile}
              alt="profile image"
              className="photo-list__user-profile"
            />
          </div>
          <div className="photo-list__user-info">
            <span>{clickedPhoto.user.name}</span>
            <p className="photo-list__user-location">
              {clickedPhoto.location.city},{clickedPhoto.location.country}
            </p>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <p className="photo-details-modal__header">Similar Photos</p>
        <PhotoList
          photos={photos}
          selectedPhoto={selectedPhoto}
          selectedPhotoHandler={selectedPhotoHandler}
          isFavourite={isFavourite}
          setModalHandler={setModalHandler}
          setClickedPhoto={setClickedPhoto}
          similarPhotos={similarPhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
