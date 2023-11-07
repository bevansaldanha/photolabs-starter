import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { slug, title, id, newTopic } = props;
  return (
    <div className="topic-list__item" >
      <span onClick={()=> newTopic(id)}>
        {title} 
      </span>
    </div>
  );
};

export default TopicListItem;
