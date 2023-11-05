import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';


const FavBadge = ({ likes, isFavPhotoExist }) => {
  let displayAlert =  false;
  if(likes && Object.values(likes).length) { 
    displayAlert = true
  }

  return (
    <div className='fav-badge'>
      <FavIcon className='fav-badge__count' displayAlert={displayAlert} selected={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;