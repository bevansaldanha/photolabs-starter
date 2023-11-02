import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const {likes,handler} = props
  const [like, setLike] = useState(false)
  
  const callback = () => {
    like? setLike(false) : setLike(true) 
    like?  handler(likes,false) : handler(likes,true)
  }
  console.log();

  return (
    <div  className="photo-list__fav-icon">
      <div onClick={()=> callback()} className="photo-list__fav-icon-svg">
      <FavBadge isFavPhotoExist = {like} />
      </div>
    </div>
  );
}
export default PhotoFavButton;