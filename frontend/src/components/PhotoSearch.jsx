import React, {useState} from "react";
import '../styles/PhotoSearch.scss';

const PhotoSearch = ({ photoData }) => {
  const [input, setInput] = useState('');

  const fetchSearch = (value) => {
  useEffect(() => {
    fetch("/api/photos", {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => {
        const searchResults = json.filter((photo) => {
          return (
            value &&
            photo.tile.toLowerCase().includes(value)
          )
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchSearch(value);
  }

  return (
    <div className="photo-search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default PhotoSearch;