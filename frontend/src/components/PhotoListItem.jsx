import "../styles/PhotoListItem.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    id: "1",
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const PhotoListItem = () => {
  /* Insert React */

  return (
    <div>
      <img src={sampleDataForPhotoListItem.urls.regular} alt="image" />
      <img src={sampleDataForPhotoListItem.user.profile} alt="profile" />
    </div>
  );
};

export default PhotoListItem;
