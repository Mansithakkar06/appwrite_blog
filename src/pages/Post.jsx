import React, {  useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteDocument, getDocument, getFileview } from '../appwrite/post';
import { useDispatch, useSelector } from 'react-redux';
import { deletepost } from '../redux/postSlice';

function Post() {
  const { id } = useParams("id");
  const [post, setPost] = useState("");
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleDelete=async(id)=>{
    if(id){
      const deletedpost=await deleteDocument(id)
      console.log(deletedpost)
      dispatch(deletepost(id))
      navigate('/')
    }
  }
  useEffect(() => {
    const getpost = async () => {
      const p = await getDocument(id)
      setPost(p)
    }
    getpost()
  }, [id]);
  return (
    <div className='p-3'>
      {
        user.$id===post.userid&&
      <div className='flex justify-end py-3 px-2'>
                <Link to={`/edit/${id}`} className='bg-green-700 px-4 py-2 rounded-lg'>Edit</Link>
                <button onClick={()=>handleDelete(id)} className='bg-red-600 px-4 py-2 rounded-lg mx-3'>Delete</button>
            </div>
      }
      <div className=''>
        <img src={getFileview(post.image)} alt="img" className='rounded-lg w-full' />
      </div>
      <div className='px-4'>
        <div className='flex justify-between'>
          <p>Posted on {post?.$createdAt && post.$createdAt.slice(0, 10)}</p>
          <p>Post by {post.username}</p>
        </div>
        <h1 className='text-2xl mt-3'>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default Post
