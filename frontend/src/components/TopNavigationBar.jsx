import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {
  const {likes, handler} = {...props}

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge displayAlert = {likes} handler = {handler} isFavPhotoExist={true}/>
      
    </div>
  )
}

export default TopNavigation;