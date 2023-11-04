import React,  { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


import '../styles/HomeRoute.scss';
const HomeRoute = (props) => {
  const { likes, handler, selected, isSelected, photos} = props
  return (
    <div className="home-route">
      <TopNavigationBar likes = {likes} handler = {handler}/>
      <PhotoList likes = {likes} photos = {photos}  handler = {handler} selected = {selected} isSelected = {isSelected}/>
    </div>
  );
};

export default HomeRoute;
