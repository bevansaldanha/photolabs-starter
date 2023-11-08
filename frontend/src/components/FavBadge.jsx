import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';


const FavBadge = (props) => {
  const { likes, isFavPhotoExist, viewLikedPhotosView,navbar } = props


  let displayAlert = false;
  if (likes && Object.values(likes).length) {
    displayAlert = true;
  }

  return (
    <div className='fav-badge' onClick={() => navbar && viewLikedPhotosView()}>
      <FavIcon className='fav-badge__count' displayAlert={displayAlert} selected={!!isFavPhotoExist}  />
    </div>
  );
};

export default FavBadge;