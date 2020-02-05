import React from 'react';

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={() => props.setLikes(props.likes + 1)} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">{props.likes}{' '}likes</p>
</div>
  )
};

export default LikeSection;

// explanation
// 1. we then use the props inherited from its parent component accordingly
// 2. we also added an onClick which includes a callback that utilises the setLikes function inherited to mutate the likes property that is displayed on the page