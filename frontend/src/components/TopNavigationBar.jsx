import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';


const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
      <FavBadge isFavPhotoExist={true}/>
    </div>
  )
}

export default TopNavigation;