import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {
  const { photo,updateLikes, isSelected, likes, handler, selected } = props;
  const similarPhotos = Object.values(photo.similar_photos);

  let isLiked = false
  if (likes && Object.values(likes).includes(photo.id)) {
    isLiked = true
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => isSelected(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton likes={likes} handler={isSelected} id = {photo.id} isLiked = {isLiked} updateLikes={updateLikes}/>
        <img className=" photo-details-modal__image" src={photo.urls.regular} />
        <div className='photo-details-modal__header'>
          <div className=" photo-details-modal__photographer-details ">

            <img className=" photo-details-modal__photographer-profile " src={photo.user.profile} />
            <div className=" photo-details-modal__photographer-info ">

              <p className=" photo-details-modal__photographer-info">{photo.user.name} </p>
              <p className=" photo-details-modal__photographer-info photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</p>
            </div>

          </div>
          See Similar Photos
        </div>
        <div className='photo-details-top-bar'>
        <PhotoList photos = {similarPhotos} likes = {likes} handler = {handler} selected = {selected} isSelected = {isSelected} isLiked = {isLiked} updateLikes={updateLikes}/>
      </div>
      </div>
    </div>


  );
};

export default PhotoDetailsModal;
