import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';




// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  const {urls,user,location} = props
  console.log(props)
  return (

    <li className="photo-list__item">
      <PhotoFavButton />
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
