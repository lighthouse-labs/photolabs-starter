import React from 'react';

import '../styles/PhotoListItem.scss';



const PhotoListItem = (props) => {
  const { data } = props;
  return (
    <article>
      <div>
        <img src={data.imageSource} alt="new image" />
      </div>
      <div>
        <div>
          <img src={data.profile} alt="profile image" />
        </div>
        <div>
          <h3>{data.username}</h3>
          <p>
            {data.location.city},{data.location.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
