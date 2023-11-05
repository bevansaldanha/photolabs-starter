import React, { useState } from 'react';
import photos from "mocks/photos";


const useApplicationData = () => {
  

  const [likes, setLikes] = useState({});
  const [selected, setSelected] = useState(false);
  const [photoInfo, setPhotoInfo] = useState(null);
  const updateToFavPhotoIds = (id, val) => {
    if (val) {
      likes[`photo${id}`] = id;
      setLikes({ ...likes }, likes[`photo${id}`] = id);
    } else {
      delete likes[`photo${id}`];
      setLikes({ ...likes });
    }
  };
  const onPhotoSelect = (selected, photoIndex) => {
    let index = null;
    if (selected) {
      index = photos.find(element => element.id === photoIndex);
      setSelected(true);
      setPhotoInfo(index);
    } else {
      setSelected(false);
    }
    
  };
  const state = {likes,selected,photoInfo}

  return(likes,selected,photoInfo,state,updateToFavPhotoIds,onPhotoSelect)
};

export default useApplicationData;