import React, { useEffect, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    newTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute likes={state.likes} updateLikes={updateToFavPhotoIds} selected={state.selected} isSelected={onPhotoSelect} photos={state.photoData} topics={state.topicData} newTopic={newTopic} />
      {state.selected && <PhotoDetailsModal photo={state.photoInfo} selected={state.selected} isSelected={onPhotoSelect} likes={state.likes} updateLikes={updateToFavPhotoIds} />}
    </div>
  );
};
export default App;
