import React, { useReducer, useState } from 'react';
import photos from "mocks/photos";
export const ACTIONS = {
  FAV_PHOTO_CHANGED: 'FAV_PHOTO_CHANGED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FAV_PHOTO_CHANGED':
      const updatedLikes1 = { ...state.likes };
      if (action.value.val) {

        updatedLikes1[`photo${action.value.id}`] = action.value.id;
        const updatedState1 = { ...state, likes: updatedLikes1 };
        return updatedState1;
      } else {
        delete updatedLikes1[`photo${action.value.id}`];
        const updatedState1 = { ...state, likes: updatedLikes1 };
        return updatedState1;
      }
    case 'DISPLAY_PHOTO_DETAILS':
      let index = null;
      if (action.value.selected) {
        index = photos.find(element => element.id === action.value.photoIndex);
        const updatedState2 = { ...state, selected: true, photoInfo: index };
        return updatedState2

      } else {
        const updatedState2 = { ...state, selected: false, photoInfo: null };
        return updatedState2
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
const initialState = { likes: {}, selected: false, photoInfo: null };

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (id, val) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_CHANGED, value: { id, val } });
  };
  const onPhotoSelect = (selected, photoIndex) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: { selected, photoIndex } });
  };

  return { state, updateToFavPhotoIds, onPhotoSelect };
};

export default useApplicationData;