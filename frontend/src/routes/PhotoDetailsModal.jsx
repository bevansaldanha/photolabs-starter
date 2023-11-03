import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  const { photo, isSelected, likes } = props;

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__header'>
        <button className="photo-details-modal__close-button" onClick={() => isSelected(true)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <PhotoFavButton likes={likes} handler={isSelected} />
        <img className=" photo-details-modal__image" src={photo.urls.full} />

      </div>

      <div className=" photo-details-modal__photographer-details ">

        <img className=" photo-details-modal__photographer-profile " src={photo.user.profile} />
        <div className=" photo-details-modal__photographer-info ">

          <p className=" photo-details-modal__photographer-info">{photo.user.name} </p>
          <p className=" photo-details-modal__photographer-info photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>

  );
};

export default PhotoDetailsModal;
