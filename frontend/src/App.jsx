import React, { useEffect, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import photos from "mocks/photos";
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // useEffect(() => {
  //   fetch('api/photos')
  //     .then(res => res.json())
  //     .then(data => { console.log([...data]); });
  // }, []);
  // useEffect(() => {
  //   fetch('api/topics')
  //     .then(res => res.json())
  //     .then(data => { console.log([...data]); });
  // }, []);

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    newTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute likes={state.likes} updateLikes={updateToFavPhotoIds} selected={state.selected} isSelected={onPhotoSelect} photos={state.photoData} topics={state.topicData} newTopic ={newTopic}/>
      {state.selected && <PhotoDetailsModal photo={state.photoInfo} selected={state.selected} isSelected={onPhotoSelect} likes={state.likes} updateLikes={updateToFavPhotoIds} />}
    </div>
  );
};
export default App;
