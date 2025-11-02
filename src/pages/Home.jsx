import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'

function Home() {
  const posts=useSelector(state=>state.post.posts)
  const activeposts=posts.filter((post)=>(
    post.status==="active"
  ))
  return (
    <div className='p-4 m-2 flex'>
      {activeposts.map((post)=>(   
        <div key={post.$id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Home
