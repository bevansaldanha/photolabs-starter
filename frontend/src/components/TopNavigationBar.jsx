import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

const navbar = true
const TopNavigation = (props) => {
  const { likes, topics, newTopic, viewLikedPhotosView } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => newTopic(null)}>PhotoLabs</span>
      <TopicList topics={topics} newTopic={newTopic} />
      <FavBadge  className="top-nav-badge" likes={likes} isFavPhotoExist={true} viewLikedPhotosView={viewLikedPhotosView} navbar={navbar}/>

    </div>
  );
};

export default TopNavigation;