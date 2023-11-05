import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const {likes,updateLikes, id, isLiked} = props
  let show = false;
  if (likes&&Object.values(likes).includes(id)) {
    show = true;
  }
  const callback = (arg) => {

    if (arg) {
      updateLikes(id,false)
    } else {
      updateLikes(id,true)
      // show = true
    }
  }

  return (
    <div  className="photo-list__fav-icon">
      <div onClick={()=> callback(isLiked)} className="photo-list__fav-icon-svg">
      <FavBadge isFavPhotoExist = {show} />
      </div>
    </div>
  );
}
export default PhotoFavButton;