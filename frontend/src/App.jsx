import React, {useState} from 'react';
import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const[favourite, setFavourite] = useState([]);
 
  
  console.log(favourite)
  const toggleFavourite = (photoId) => {
    if (favourite.includes(photoId)) {
      const newFavourite = favourite.filter((id) => {
        return id != photoId
      })
      setFavourite(newFavourite);
    } else {
      const newFavourite = [...favourite, photoId];
      setFavourite(newFavourite);
    }
  }
  const[sidePeek, setSidePeek] = useState(false);
  const [sampleDataForPhotoListItem, setSampleDataForPhotoListItem] = useState('')
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}  setSidePeek={setSidePeek} sidePeek={sidePeek} setSampleDataForPhotoListItem={setSampleDataForPhotoListItem} favourite={favourite} toggleFavourite={toggleFavourite} />

      {sidePeek && <PhotoDetailsModal  setSidePeek={setSidePeek} sampleDataForPhotoListItem={sampleDataForPhotoListItem} photos={photos}  favourite={favourite} toggleFavourite={toggleFavourite}  />}
    </div>
  );
};

export default App;