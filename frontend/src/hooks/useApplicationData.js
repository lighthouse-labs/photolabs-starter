import { type } from "@testing-library/user-event/dist/type";
import { useState ,useReducer} from "react";
//const setSidePeek = 'setSidePeek';
//const setSampleDataForPhotoListItem = 'setSampleDataForPhotoListItem';
//const toggleFavourite = 'toggleFavourite';

const reducers = {
 
  setSidePeek(state,action) {
    return {...state, sidePeek: action.value};
  },
  setSampleDataForPhotoListItem(state,action) {
    return {...state, sampleDataForPhotoListItem: action.value};
  },
  toggleFavourite(state,action) {
    return {...state, favourite: action.value};
  }
}
const reducer = function (state, action) {
  
  if(reducers[action.type]) {
    return reducers[action.type] (state, action)
  } else return state;
  /*
  switch (action.type) {
    case setSidePeek: {
      return {...state, sidePeek: action.value};
    }

    case setSampleDataForPhotoListItem: {
      return {...state, sampleDataForPhotoListItem: action.value};
    }

    case toggleFavourite: {
      return {...state, favourite:action.value};
    }
    default: {
      return state;
    }
  }
  */
  
  /*
  if (action.type === 'setSidePeek' ) {
    return {...state, sidePeek: action.value}
  } if (action.type === 'setSampleDataForPhotoListItem') {
    return {...state, sampleDataForPhotoListItem: action.value}
  } if (action.type === 'toggleFavourite') {
    return {...state, favourite:action.value}
  }
  */
}
export default function useApplicationData () {
  
  const [state, dispatch] = useReducer(reducer, {sidePeek: false,sampleDataForPhotoListItem: '', favourite: []});

  const setSidePeek = function (updatedSidePeek) {
    dispatch({type: 'setSidePeek',value:updatedSidePeek})
  }
  const setSampleDataForPhotoListItem = function (updateSampleData) {
    dispatch({type: 'setSampleDataForPhotoListItem', value: updateSampleData})
  }
  
  const toggleFavourite = (photoId) => {
    if (state.favourite.includes(photoId)) {
      const newFavourite = state.favourite.filter((id) => {
        return id != photoId
      })
      return dispatch({type:'toggleFavourite', value :newFavourite});

    } else {
      const newFavourite = [...state.favourite, photoId];
      return dispatch({type:'toggleFavourite', value :newFavourite});
     
    }
  }
  return {
    setSidePeek,
    sidePeek: state.sidePeek,
    setSampleDataForPhotoListItem,
    favourite: state.favourite,
    toggleFavourite,
    sampleDataForPhotoListItem: state.sampleDataForPhotoListItem,
  }
}