import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const {likes,handler, id} = props
  const [like, setLike] = useState(false)
  
  const callback = () => {

    if (like) {
      handler(id,false)
      setLike(false)
    } else {
      handler(id,true)
      setLike(true)
    }
  }

  return (
    <div  className="photo-list__fav-icon">
      <div onClick={()=> callback()} className="photo-list__fav-icon-svg">
      <FavBadge  isFavPhotoExist = {like} />
      </div>
    </div>
  );
}
export default PhotoFavButton;