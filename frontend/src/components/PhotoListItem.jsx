import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';



const PhotoListItem = (props) => {
  const {urls,user,location,likes, handler, selected, isSelected, id} = props

  let isLiked = false
  if (likes && Object.values(likes).includes(id)) {
    isLiked = true
  }


  return (

    <li className="photo-list__item">
      <PhotoFavButton likes = {likes} handler = {handler} id={id} isLiked = {isLiked}/>
      <img className=" photo-list__image" src={urls.full} onClick={() => isSelected(false,id)}/>

      <div className=" photo-list__user-details ">

        <img className=" photo-list__user-profile " src={user.profile} />
        <div className=" photo-list__user-info ">

          <p className=" photo-list__user-info">{user.name} </p>
          <p className=" photo-list__user-info photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>


    </li>

  );
};

export default PhotoListItem;
