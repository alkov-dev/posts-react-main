import React from 'react';
import Post from "./Post/Post"




const Posts = (props) => {

  const newData = props.posts.map(item => {
    return <Post
    key={item.id} text={item.text}
    onToggleImportant={() => props.onToggleImportant(item.id)}
    important={item.important}
    like={item.like}
    onToggleLiked={() => props.onToggleLiked(item.id)}
    onDelete={() => props.onDelete(item.id)}/>
  })
  return (
    <ul className='p-0'>
      {newData}
    </ul>
  )
}
export default Posts;