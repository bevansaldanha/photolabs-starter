import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {
  const {topics, newTopic} = props
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((item) => { return <TopicListItem {...item} key={item.slug} newTopic={newTopic}/>; })}
    </ul>
  );
};

export default TopicList;
