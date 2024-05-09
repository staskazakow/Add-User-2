import { useState } from "react";
import React from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";
const PostForm = ({create}) => {
    const [posts,setPosts] = useState({title:"",body:""})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...posts,
            id: Date.now()
        }
        create(newPost)
        setPosts({title:"",body:""})
      }
    return(
        <form>
        <MyInput type='text' placeholder='Название поста'
        value={posts.title}
        onChange={event => setPosts({...posts, title: event.target.value})}/>
        <MyInput type='text' placeholder='Содержание поста' value={posts.body} onChange={e => setPosts({...posts,body:e.target.value})}/>
        <MyButton onClick={addNewPost} >Create post</MyButton>
      </form>
    )
}
export default PostForm