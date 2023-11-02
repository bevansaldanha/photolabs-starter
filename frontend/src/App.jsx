import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from './components/PhotoList';


// Note: Rendering a single component to build components in isolation
const App = () => {



  // let array = new Array(3).fill(sampleDataForPhotoListItem);
  // let n = 0;
  // const loopThrough = array.map((item) => { return <PhotoListItem {...item} key = {n++} />; });

  return (
    <div className="App">
      {/* {loopThrough} */}
      <PhotoList/>
    </div>
  );
};

export default App;
