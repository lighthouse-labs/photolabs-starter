import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = () => {
  /* Insert React */
}

PhotoListItem.defaultProps = {
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
};

export default PhotoListItem