import React, { useReducer, useEffect } from 'react';
export const ACTIONS = {
  FAV_PHOTO_CHANGED: 'FAV_PHOTO_CHANGED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  CHANGE_TOPIC: 'CHANGE_TOPIC',
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
        index = state.photoData.find(element => element.id === action.value.photoIndex);
        const updatedState2 = { ...state, selected: true, photoInfo: index };
        return updatedState2;

      } else {
        const updatedState2 = { ...state, selected: false, photoInfo: null };
        return updatedState2;
      }
    case 'SET_PHOTO_DATA':
      const updatedState3 = { ...state, photoData: action.payload };
      return updatedState3;
    case 'SET_TOPIC_DATA':
      const updatedState4 = { ...state, topicData: action.payload };
      return updatedState4;
    case 'CHANGE_TOPIC':
      const updatedState5 = { ...state, selectedTopic: action.value };
      return updatedState5;

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
const initialState = {
  likes: {},
  selected: false,
  photoInfo: null,
  photoData: [],
  topicData: [],
  selectedTopic: '',
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('api/photos')
      .then(res => res.json())
      .then(data => { dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }); });
  }, []);

  useEffect(() => {
    fetch('api/topics')
      .then(res => res.json())
      .then(data => { dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }); });
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`api/topics/photos/${state.selectedTopic}`)
        .then(res => res.json())
        .then(data => { dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }); });
    } else {
      fetch('api/photos')
        .then(res => res.json())
        .then(data => { dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }); });
    }
  }, [state.selectedTopic]);

  const updateToFavPhotoIds = (id, val) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_CHANGED, value: { id, val } });
  };
  const onPhotoSelect = (selected, photoIndex) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: { selected, photoIndex } });
  };
  const newTopic = (id) => {
    dispatch({ type: ACTIONS.CHANGE_TOPIC, value: id });
  };

  return { state, updateToFavPhotoIds, onPhotoSelect, newTopic };
};

export default useApplicationData;