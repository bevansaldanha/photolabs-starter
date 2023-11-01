import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  let array = new Array(3).fill(sampleDataForPhotoListItem);
  let n = 0;
  const loopThrough = array.map((item) => { return <PhotoListItem {...item} key = {n++} />; });

  return (
    <div className="App">
      {loopThrough}
    </div>
  );
};

export default App;
