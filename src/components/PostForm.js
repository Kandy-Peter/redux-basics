import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);
  //useDispatch Hook allows us to dispatch our actions in the index file:
  const dispatch = useDispatch();

  const handleForm = (e) =>{
    e.preventDefault();

    if(title && content){
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0
      };
      dispatch(addPosts(data));
      setTitle('');
      setContent('');
      dispatch(getPosts()); //from the store
    };
  };

  return (
    <div className="form-container">
      <form onSubmit={handleForm}>
        <input 
        type="text" 
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
        <textarea 
        placeholder="Let's read your thinkings..."
        onChange={(e) => setContent(e.target.value)}
        value = {content}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
