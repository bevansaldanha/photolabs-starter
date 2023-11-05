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

  console.log("Big man", photoInfo);

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
      setSelected(false);
      setPhotoInfo(null);
    } else {
      if (photoIndex) {
        
        index = photos.find(element => element.id === photoIndex);
      }
      setSelected(true);
      setPhotoInfo(index);
    }

  };

  return (
    <div className="App">
      <HomeRoute likes={likes} handler={updateLikes} selected={selected} isSelected={isSelected} photos={photos} />


      {selected && <PhotoDetailsModal photo={photoInfo} selected={selected} isSelected={isSelected} likes={likes} handler={updateLikes} />}
    </div>
  );
};

export default App;
