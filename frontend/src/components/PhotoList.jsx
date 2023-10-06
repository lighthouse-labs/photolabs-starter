import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const handlePhotoClick = (id) => {
    const selectedPhoto = props.photos.find((photo) => photo.id === id); // Find the selected photo
    const photoData = {
      id: selectedPhoto.id,
      imageSource: `${process.env.PUBLIC_URL}${selectedPhoto.urls.regular}`,
      username: selectedPhoto.user.username,
      location: selectedPhoto.location,
      profile: `${process.env.PUBLIC_URL}${selectedPhoto.user.profile}`,
      isLiked: props.isLiked(selectedPhoto.id),
      toggleLike: () => props.toggleLike(selectedPhoto.id),
      alert: props.alert,
      setAlert: props.setAlert,
      setModalVisible: props.setModalVisible, 
      similarPhotos : selectedPhoto.similarPhotoIds// Pass the setModalVisible function
  };
    props.openPhotoModal(id, photoData); // Pass the selected photo data to openPhotoModal
  };
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          photo={photo}
          key={photo.id}
          imageSource={`${process.env.PUBLIC_URL}${photo.urls.regular}`}
          username={photo.user.username}
          location={photo.location}
          profile={`${process.env.PUBLIC_URL}${photo.user.profile}`}
          isLiked={props.isLiked(photo.id)}
          toggleLike={() => props.toggleLike(photo.id)}
          alert={props.alert}
          setAlert={props.setAlert}
          setModalVisible={props.setModalVisible} // Pass the setModalVisible function
          onClick={() => handlePhotoClick(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

