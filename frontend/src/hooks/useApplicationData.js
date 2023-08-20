import { useState } from "react";
export default function useApplicationData () {
  
  const[favourite, setFavourite] = useState([]);
  const[sidePeek, setSidePeek] = useState(false);
  const [sampleDataForPhotoListItem, setSampleDataForPhotoListItem] = useState('')
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
  return {
    setSidePeek,
    sidePeek,
    setSampleDataForPhotoListItem,
    favourite,
    toggleFavourite,
    sampleDataForPhotoListItem
  }
}