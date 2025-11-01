import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'

function Home() {
  const posts=useSelector(state=>state.post.posts)
  
  return (
    <div className='p-4 m-2 flex'>
      {posts.map((post)=>(        
        <div key={post.$id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Home
