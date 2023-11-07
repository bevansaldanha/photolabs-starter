import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {
  const { likes, topics, newTopic } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => newTopic(null)}>PhotoLabs</span>
      <TopicList topics={topics} newTopic={newTopic} />
      <FavBadge likes={likes} isFavPhotoExist={true} />

    </div>
  );
};

export default TopNavigation;