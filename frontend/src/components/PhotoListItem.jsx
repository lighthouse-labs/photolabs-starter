import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({dataList}) => {
  return (
  <div>
    {dataList.map((data) => (
      <section key={data.id} className="photo-list__item">
        <img className="photo-list__image" src={data.imageSource}/>
          <div className="photo-list__user-details">
            <img className="photo-list__user-profile" src={data.profile}/>
            <div>
              <div>
                <span className="photo-list__user-info">{data.username}</span>
              </div>
              <div>
                <span className="photo-list__user-location photo-list__user-info">{data.location.city}, {data.location.country}</span>
              </div>
            </div>
          </div>
      </section> 
    ))}
  </div>
  )
};

export default PhotoListItem;
