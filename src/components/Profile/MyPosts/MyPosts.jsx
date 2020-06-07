import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  const toAddNewPost = () => {
    props.addNewPost();
  };

  const toChangeInput = (e) => {
    props.changeInput(e.target.value);
  };

  let postsElements = props.posts.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={toChangeInput}
            value={props.posts.newPostText}
          />
        </div>
        <div>
          <button onClick={toAddNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
