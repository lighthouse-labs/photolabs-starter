import { useState } from 'react';


export const useApplicationData = () => {

  //Favotires
  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    setFavorite((presentFavorites) => {
      if (presentFavorites.includes(id)) {
        return presentFavorites.filter(favoriteId => favoriteId !== id);
      } else {
        return [...presentFavorites, id]
      }
    })
  }

  //DisplayModal
  const [displayModal, setDisplayModal] = useState(false);

  const updateDisplayModal = (props) => {
    const modalProps = { ...props, modalState: true };
    displayModal ? setDisplayModal(false) : setDisplayModal(modalProps);
  }

  return { favorite, toggleFavorite, displayModal, updateDisplayModal };
};

