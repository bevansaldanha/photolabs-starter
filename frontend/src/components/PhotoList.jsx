import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from 'components/PhotoListItem';
import photos from "mocks/photos";


const PhotoList = (props) => {
  const {likes, handler} = props



  return (
    <ul className="photo-list">
      {photos.map((item) => { return <PhotoListItem {...item} key={item.id} likes = {likes} handler = {handler}/>; })}
    </ul>
  );
};

export default PhotoList;
