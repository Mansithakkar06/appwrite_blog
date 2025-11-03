import React from 'react'
import { Link } from 'react-router-dom'
import { getFileview } from '../appwrite/post'

function PostCard({post,classname='w-50 h-70'}) {
    const image=getFileview(post.image)
    const len=post.title.length
  return (
    <div className={`${classname} dark:bg-gray-300 bg-gray-800 dark:text-black text-white p-3 m-2 rounded-lg`}>
      <div className='shadow-lg p-1'>
        <Link to={`/post/${post.$id}`}>
        <img src={image} alt="img" className='w-full h-32 object-cover rounded-t-lg' />
        </Link>
      </div>
      <div className='m-1'>
        <p className='font-light text-sm'>Posted on <span className='font-normal italic'>{post.$createdAt.slice(0,10)}</span></p>
        <p className='font-light text-sm'>Post by <span className='font-normal italic'>{post.username}</span></p>
        <h2 className='font-medium'>{len>60?post.title.slice(0,60)+'........':post.title}</h2>
        <p>{post.descripion}</p>
      </div>
    </div>
  )
}

export default PostCard
