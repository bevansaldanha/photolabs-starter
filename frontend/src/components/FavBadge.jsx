import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert,isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon className='fav-badge__count' displayAlert = {displayAlert}   selected={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;