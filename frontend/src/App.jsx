import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0)
  const [selected, setSelected] = useState(false)
  const [photoInfo, setPhotoInfo] = useState(null)



  
  const updateLikes = (likes, val) => {
    if (val) {
      setLikes(likes+=1)
    } else {
      setLikes(likes-=1)
    }
  } 

  const isSelected = (selected, photoIndex) => {
    selected? setSelected(false): setSelected(true);
    selected? setPhotoInfo(null): setPhotoInfo(photos[photoIndex]);

  }

  return (
    <div className="App">
      <HomeRoute likes = {likes} handler = {updateLikes} selected = {selected} isSelected = {isSelected} photos = {photos}/>
      {selected && <PhotoDetailsModal photo = {photoInfo} selected= {selected} isSelected= {isSelected} likes = {likes} handler = {updateLikes}/>}
    </div>
  );
};

export default App;
