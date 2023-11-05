import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState({});
  const [selected, setSelected] = useState(false);
  const [photoInfo, setPhotoInfo] = useState(null);
  





  const updateLikes = (id, val) => {
    if (val) {
      likes[`photo${id}`] = id;
      setLikes({ ...likes }, likes[`photo${id}`] = id);
    } else {
      delete likes[`photo${id}`];
      setLikes({ ...likes });
    }
  };
  const isSelected = (selected, photoIndex) => {
    let index = null;
    if (selected) {
      index = photos.find(element => element.id === photoIndex);
      setSelected(true);
      setPhotoInfo(index);
    } else {
      setSelected(false);
    }

  };




  return (
    <div className="App">
      <HomeRoute likes={likes} updateLikes={updateLikes} selected={selected} isSelected={isSelected} photos={photos}/>


      {selected && <PhotoDetailsModal photo={photoInfo} selected={selected} isSelected={isSelected} likes={likes} updateLikes={updateLikes} />}
    </div>
  );
};

export default App;
