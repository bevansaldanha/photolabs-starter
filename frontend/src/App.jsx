import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute likes={state.likes} updateLikes={updateToFavPhotoIds} selected={state.selected} isSelected={onPhotoSelect} photos={photos}/>
      {state.selected && <PhotoDetailsModal photo={state.photoInfo} selected={state.selected} isSelected={onPhotoSelect} likes={state.likes} updateLikes={updateToFavPhotoIds} />}
    </div>
  );
};
export default App;
