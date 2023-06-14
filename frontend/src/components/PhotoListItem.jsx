import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  return (
    <div className="photo-list-item">
      <div className="photo-list-item__image">
        <img src={imageSource} alt={`Photo ${id}`} />
      </div>
      <div className="photo-list-item__info">
        <div className="photo-list-item__info__user">
          <img src={profile} alt={`Profile ${username}`} />
          <span className="photo-list-item__info__user__username">{username}</span>
        </div>
        <div className="photo-list-item__info__location">{location.city}, {location.country}</div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: '1',
  location: {
    city: 'Montreal',
    country: 'Canada'
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
 
};

PhotoListItem.propTypes = {
  username: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired,
  profile: PropTypes.string.isRequired
};

export default PhotoListItem;
