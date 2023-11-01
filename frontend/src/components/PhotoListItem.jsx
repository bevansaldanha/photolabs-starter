import React from "react";

import "../styles/PhotoListItem.scss";


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
  return (
      <article className="photo-list-item">

        <img src={props.imageSource} />
        <img src={props.profile} />
        <p>{props.username}</p>
        <p>{props.location.city},{props.location.country}</p>

      </article>
  );
};

export default PhotoListItem;
