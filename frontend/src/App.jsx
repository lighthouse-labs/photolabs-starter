import React from 'react';
import HomeRoute from './routes/HomeRoute';
import mockPhotos from '../src/mocks/photos.js'; // Correct import
import mockTopics from '../src/mocks/topics.js'; // Correct import

// Define the transformation function
const transformPhotoData = (photoData) => {
  return photoData.map((photo, index) => {
    return {
      id: photo.id,
      location: {
        city: photo.location.city,
        country: photo.location.country,
      },
      urls: {
        full: photo.urls.full,
        regular: photo.urls.regular,
      },
      user: {
        id: photo.user.id,
        username: photo.user.username,
        name: photo.user.name,
        profile: photo.user.profile,
      },
    };
  });
};
const transformTopicData = (topicData) => {
  return topicData.map((topic) => {
    return {
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
    };
  });
};
const transformedTopics = transformTopicData(mockTopics);
// Use the transformPhotoData function to convert mockPhotos into the desired format
const transformedPhotos = transformPhotoData(mockPhotos);

const App = () => {
  const photos = transformedPhotos; // Use the transformed data
  const topics = transformedTopics;

  console.log(transformedPhotos);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
