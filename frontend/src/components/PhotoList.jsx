import React, {  useState } from 'react';
import "../styles/PhotoList.scss";
import PhotoListItem from 'components/PhotoListItem';
// import photos from "mocks/photos";


const PhotoList = (props) => {

  const {likes, updateLikes, selected, isSelected, photos } = props;
  
  let isLiked = false


  return (
    <ul className="photo-list">
      {photos.map((item) => {
          if (likes && Object.values(likes).includes(item.id)) {
            isLiked = true

          } else {
            isLiked = false
          }
        return <PhotoListItem {...item}
        key={item.id}
        id={item.id}
        likes={likes}
        updateLikes={updateLikes}
        selected={selected}
        isSelected={isSelected}
        isLiked={isLiked}/>;
      })}
    </ul>
  );
};

export default PhotoList;
