import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert,isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert = {displayAlert}   selected={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;