import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {onClick, id, city, country, full, profile, name, regular} = props;
  const similarPhotos = [{
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  }];
  //TODO: fix strange margins in modal view
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={()=> onClick()}/>
      </button>
      <PhotoFavButton />
      <img src={full} className="photo-details-modal__image"/>
      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={profile} />
        <div className="photo-details-modal__photographer-info">
          <h2>{name}</h2>
          <h2 className="photo-details-modal__photographer-location">{city} {country}</h2>
        </div>
      </div>
      <section className="photo-details-modal__header ">Similar Photos
        <section className="photo-details-modal__images">
          <PhotoList photos={similarPhotos}/>
        </section>
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
