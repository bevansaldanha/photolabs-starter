import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0)
  const [selected, setSelected] = useState(false)
  console.log(selected, 'changed');


  
  const updateLikes = (likes, val) => {
    if (val) {
      setLikes(likes+=1)
    } else {
      setLikes(likes-=1)
    }
  } 

  const isSelected = (selected) => {
    selected? setSelected(false): setSelected(true);
    console.log("Reached here");
  }

  return (
    <div className="App">
      <HomeRoute likes = {likes} handler = {updateLikes} selected = {selected} isSelected = {isSelected}/>
      {selected && <PhotoDetailsModal/>}
    </div>
  );
};

export default App;
