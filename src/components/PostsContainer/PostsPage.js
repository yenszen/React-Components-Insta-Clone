//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  // console.log(props.data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.data.map((post, index) => {
        console.log(post, index);
        return <Post post={post} key={index} />
      })}
    </div>
  );
};

export default PostsPage;

// explanation
// 1. we map through the data which is a property (i.e. props) of the parent component of this child component
// 2. always RETURN what we have mapped, and in this case we return its child component