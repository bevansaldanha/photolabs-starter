import React,  { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


import '../styles/HomeRoute.scss';
const HomeRoute = (props) => {


  const {likes, updateLikes, selected, isSelected, photos} = props
  return (
    <div className="home-route">
      <TopNavigationBar likes = {likes} updateLikes = {updateLikes}/>
      <PhotoList likes = {likes} photos = {photos}  updateLikes = {updateLikes} selected = {selected} isSelected = {isSelected} />
    </div>
  );
};

export default HomeRoute;
