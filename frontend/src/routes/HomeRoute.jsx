import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route" onClick={props.onClick}>
      <TopNavigation 
      likedPhotos={props.likedPhotos}
      topicData={props.topicData}
      getPhotosByTopics={props.getPhotosByTopics}
      />
      <PhotoList 
      setPhotoSelected={props.setPhotoSelected}
      photos={props.photos}
      onClickPhoto={props.onClickPhoto}
      currentPhoto={props.currentPhoto}
      onClosePhotoDetailsModal={props.onClosePhotoDetailsModal}
      likedPhotos={props.likedPhotos}
      handleButtonClick={props.updateToFavPhotoIds}/>
    </div>
  );
};

export default HomeRoute;


//CODE FROM BEFORE "DATA FETCHES WITH USEEFFECT"
// import React, {useState} from 'react';

// import '../styles/HomeRoute.scss';
// import TopNavigation from 'components/TopNavigationBar';
// import PhotoList from 'components/PhotoList';

// const HomeRoute = (props) => {

//   return (
//     <div className="home-route" onClick={props.onClick}>
//       <TopNavigation 
//       likedPhotos={props.likedPhotos}
//       />
//       <PhotoList 
//       setPhotoSelected={props.setPhotoSelected}
//       photos={props.photos}
//       onClickPhoto={props.onClickPhoto}
//       currentPhoto={props.currentPhoto}
//       onClosePhotoDetailsModal={props.onClosePhotoDetailsModal}
//       likedPhotos={props.likedPhotos}
//       handleButtonClick={props.updateToFavPhotoIds}/>
//     </div>
//   );
// };

// export default HomeRoute;
