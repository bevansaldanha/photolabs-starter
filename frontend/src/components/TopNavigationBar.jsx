import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {
  const {likes} = props
  const displayAlert = Object.values(likes).length

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge likes={likes} isFavPhotoExist={true}/>
      
    </div>
  )
}

export default TopNavigation;