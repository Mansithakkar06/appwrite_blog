import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'

function Home() {
  const posts=useSelector(state=>state.post.posts)
  const activeposts=posts.filter((post)=>(
    post.status==="active"
  ))
  return activeposts.length>0? (
    <div className='p-4 m-2 flex'>
      {activeposts.map((post)=>(   
        <div key={post.$id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  ):
  (
    <div className='p-3 m-3'>
            <h1 className='text-3xl text-center text-red-500'>No Posts Yet!!</h1>
    </div>
  )
}

export default Home
