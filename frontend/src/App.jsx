import React, { useEffect, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import LikedPhotoModal from 'routes/LikedPhotoModal';


const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    newTopic,
    viewLikedPhotos
  } = useApplicationData();
  console.log(state.likedPhotos);

  return (
    <div className="App">
      <HomeRoute likes={state.likes} viewLikedPhotos={state.viewLikedPhotos} updateLikes={updateToFavPhotoIds} selected={state.selected} isSelected={onPhotoSelect} photos={state.photoData} topics={state.topicData} newTopic={newTopic} viewLikedPhotosView={viewLikedPhotos}/>
      {state.selected && <PhotoDetailsModal photo={state.photoInfo} selected={state.selected} isSelected={onPhotoSelect} likes={state.likes} updateLikes={updateToFavPhotoIds} />}
      {Object.values(state.likedPhotos).length && state.viewLikedPhotos && <LikedPhotoModal likedPhotos={state.likedPhotos} viewLikedPhotos={state.viewLikedPhotos} viewLikedPhotosView={viewLikedPhotos} selected={state.selected} isSelected={onPhotoSelect} likes={state.likes} updateLikes={updateToFavPhotoIds}/>}
    </div>
  );
};
export default App;
