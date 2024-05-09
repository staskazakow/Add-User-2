import React from "react";
import MyButton from "./UI/Button/MyButton";
const Post = (props) => {
    return(
        <div className='post'>
        <div>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
        </div>
        <div className='post--btn'>
          <MyButton onClick = {() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    )
}
export default Post