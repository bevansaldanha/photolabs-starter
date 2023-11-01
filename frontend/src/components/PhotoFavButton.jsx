import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton() {
  const [like, setLike] = useState(false)
  
  const callback = () => {
    like? setLike(false) : setLike(true)
  }

  return (
    <div  className="photo-list__fav-icon">
      <div onClick={()=> callback()} className="photo-list__fav-icon-svg">
      <FavBadge isFavPhotoExist = {like}/>
      </div>
    </div>
  );
}
export default PhotoFavButton;