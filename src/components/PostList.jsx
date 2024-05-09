import React from "react";
import Post from "./Post";
import {
    TransitionGroup,
    CSSTransition,
  } from 'react-transition-group';
function PostList({post,title,remove}) {
    if(post.length === 0) {
        return(
        <h1 style={{textAlign:'center', fontSize:"20px"}}> Посты не найдены</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            <TransitionGroup>
      {post.map((posts,index) => 
        <CSSTransition
        key={posts.id}
        timeout={500}
        classNames="post"
        >
            <Post remove= {remove} number ={index + 1} post ={posts}/>
        </CSSTransition>
            )} 
            </TransitionGroup>
        </div>
    )
}
export default PostList