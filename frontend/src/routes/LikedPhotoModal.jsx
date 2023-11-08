import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const LikedPhotoModal = (props) => {
  const { photo,updateLikes, isSelected, likes, handler, selected,viewLikedPhotos,viewLikedPhotosView , likedPhotos } = props;
  const likedPhototsArr = Object.values(likedPhotos);
  console.log(likedPhotos, 'inHERE');

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => viewLikedPhotosView()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>

        <div className='photo-details-top-bar'>
        <PhotoList photos = {likedPhototsArr} likes = {likes} handler = {handler} selected = {selected} isSelected = {isSelected} isLiked = {true} updateLikes={updateLikes}/>
      </div>
      </div>
    </div>

  );
};

export default LikedPhotoModal;
