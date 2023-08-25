import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button onClick={props.onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='main-photo-box'>
        <PhotoFavButton 
          isLiked={props.likedPhotos.includes(props.photo.id)}
          handleButtonClick={() => props.handleButtonClick(props.photo.id)}
        />
          <img src={props.photo.urls.regular} className="photo-details-modal__image"/>
          <div className="photo-list__user-details">
            <img src={props.photo.user.profile} className="photo-list__user-profile photo-list__user-details"/>
            <div>
              <h3 className="photo-list__user-info">{props.photo.user.username}</h3> 
              <h3 className="photo-list__user-location photo-list__user-info">{props.photo.location.city}, {props.photo.location.country}</h3>
            </div>
          </div>
      </div>

      <div className='photo-details-modal__images'>
        <p className="photo-details-modal__header">Similar Photos</p>
        {Object.values(props.photo.similar_photos).map((photo) => 

        <PhotoListItem 
          className='make-similar-photos'
          key = {photo.id}
          sampleImage={photo}
          isLiked={props.likedPhotos.includes(photo.id)}
          handleButtonClick={() => props.handleButtonClick(photo.id)}
        />
        )}
      </div>
    </div>
  )
};

//code before Make the design changes exercise
// const PhotoDetailsModal = (props) => {
//   return (
//     <div className="photo-details-modal">
//       <button onClick={props.onClose} className="photo-details-modal__close-button">
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//       <PhotoFavButton 
//         isLiked={props.likedPhotos.includes(props.photo.id)}
//         handleButtonClick={() => props.handleButtonClick(props.photo.id)}
//       />
//       <div className='photo-details-modal__images'>
//         <img src={props.photo.urls.regular} className="photo-details-modal__image"/>

//         <p className="photo-details-modal__header">Similar Photos</p>
//         {Object.values(props.photo.similar_photos).map((photo) => 

//         <PhotoListItem 
//           className='make-similar-photos'
//           key = {photo.id}
//           sampleImage={photo}
//           isLiked={props.likedPhotos.includes(photo.id)}
//           handleButtonClick={() => props.handleButtonClick(photo.id)}
//         />
//         )}
//       </div>
//     </div>
//   )
// };

export default PhotoDetailsModal;
