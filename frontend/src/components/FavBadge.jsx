import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';


const FavBadge = ({ likes, isFavPhotoExist }) => {
  let displayAlert =  0;
  if(likes && Object.values(likes).length) { 
    displayAlert = true
  } else {
    displayAlert = false
  }

  return (
    <div className='fav-badge'>
      <FavIcon className='fav-badge__count' displayAlert={displayAlert} selected={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;