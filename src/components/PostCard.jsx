import React from 'react'
import { Link } from 'react-router-dom'
import { getFile } from '../appwrite/post'

function PostCard({post}) {
    let file=post.image
    const getImage=async(image)=>{
        const img=await getFile(image)
        console.log(img)
    }
    const postimage=getImage(file)
  return (
    <div className='w-50 bg-gray-200 p-3 m-2 rounded-lg text-black'>
      <div className='shadow-lg p-1'>
        <Link to={`/post/${post.slug}`}>
        <img src={postimage} alt="img" className='w-full h-32 object-cover rounded-t-lg' />
        </Link>
      </div>
      <div className='m-1'>
        <p className='font-light text-sm'>Posted on <span className='font-normal italic'>{post.$createdAt.slice(0,10)}</span></p>
        <p className='font-light text-sm'>Post by <span className='font-normal italic'>{post.post_by}</span></p>
        <h2 className='font-medium'>{post.title}</h2>
        <p>{post.descripion}</p>
      </div>
    </div>
  )
}

export default PostCard
