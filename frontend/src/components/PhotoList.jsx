import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from 'components/PhotoListItem';
// import photos from "mocks/photos";


const PhotoList = (props) => {
  const { likes, handler, selected, isSelected, photos } = props;




  return (
    <ul className="photo-list">
      {photos.map((item) => {
        // const index = indexOf(item)
        return <PhotoListItem {...item}
          key={item.id}
          id={item.id}
          likes={likes}
          handler={handler}
          selected={selected}
          isSelected={isSelected} />;
      })}
    </ul>
  );
};

export default PhotoList;
