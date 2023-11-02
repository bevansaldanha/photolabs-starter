import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";




const TopicList = () => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((item) => { return <TopicListItem {...item} key={item.slug} />; })}
    </ul>
  );
};

export default TopicList;
