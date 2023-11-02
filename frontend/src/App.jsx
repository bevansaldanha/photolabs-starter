import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0)
  
  const updateLikes = (likes, val) => {
    if (val) {
      setLikes(likes+=1)
    } else {
      setLikes(likes-=1)
    }
  } 

  return (
    <div className="App">
      <HomeRoute likes = {likes} handler = {updateLikes}/>
    </div>
  );
};

export default App;
