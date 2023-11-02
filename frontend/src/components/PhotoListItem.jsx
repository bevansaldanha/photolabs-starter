import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';



const PhotoListItem = (props) => {
  const {urls,user,location,likes, handler} = props

  return (

    <li className="photo-list__item">
      <PhotoFavButton likes = {likes} handler = {handler}/>
      <img className=" photo-list__image" src={urls.regular} />


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
