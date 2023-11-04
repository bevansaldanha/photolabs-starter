import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";


let count = 0;
// Note: Rendering a single component to build components in isolation
const App = () => {
  count++;
  console.log("component render number: ",count);
  const [likes, setLikes] = useState({});
  const [selected, setSelected] = useState(false);
  const [photoInfo, setPhotoInfo] = useState(null);

  const updateLikes = (id, val) => {
    if (val) {
      likes[`photo${id + 1}`] = id;
      setLikes({...likes}, likes[`photo${id + 1}`] = id);
    } else {
      delete likes[`photo${id + 1}`]
      setLikes({...likes})
    }
  };

  const isSelected = (selected, photoIndex) => {
    selected ? setSelected(false) : setSelected(true);
    selected ? setPhotoInfo(null) : setPhotoInfo(photos[photoIndex]);

  };

  return (
    <div className="App">
      <HomeRoute likes={likes} handler = {updateLikes} selected = {selected} isSelected = {isSelected} photos={photos}/>


      {selected && <PhotoDetailsModal photo={photoInfo} selected={selected} isSelected={isSelected} likes={likes} handler={updateLikes} />}
    </div>
  );
};

export default App;
