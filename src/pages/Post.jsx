import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteDocument, getDocument, getFileview } from '../appwrite/post';
import { useDispatch, useSelector } from 'react-redux';
import { deletepost } from '../redux/postSlice';
import PostCard from '../components/PostCard';

function Post() {
  const { id } = useParams("id");
  const [post, setPost] = useState("");
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const posts=useSelector(state=>state.post.posts)

  const handleDelete = async (id) => {
    if (id) {
      const deletedpost = await deleteDocument(id)
      console.log(deletedpost)
      dispatch(deletepost(id))
      navigate('/')
    }
  }

  const otherposts=posts.filter((post)=>(
      post.$id!==id
  ))
  
  useEffect(() => {
    const getpost = async () => {
      const p = await getDocument(id)
      setPost(p)
    }
    getpost()
  }, [id]);
  return (
    <div className='flex px-4 mx-7 py-4 gap-5'>
      <div className={`${otherposts.length>0 ?'w-3/4':""}`}>
        {
          user.$id === post.userid &&
          <div className='flex py-3 px-2 justify-end'>
            <Link to={`/edit/${id}`} className='bg-green-700 px-4 py-2 rounded-lg text-white'>Edit</Link>
            <button onClick={() => handleDelete(id)} className='bg-red-600 px-4 py-2 rounded-lg mx-3 text-white'>Delete</button>
          </div>
        }
        <div className=''>
          <div className=''>
            <img src={getFileview(post.image)} alt="img" className='rounded-lg w-full' />
            <div className='flex justify-between'>
              <p>Posted on {post?.$createdAt && post.$createdAt.slice(0, 10)}</p>
              <p>Post by {post.username}</p>
            </div>
          </div>

          <div className='px-4'>
            <h1 className='text-2xl my-3'>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
      {
        otherposts.length>0 &&
      <div className='w-1/4'>
        <h1 className='text-3xl p-2 text-center text-green-500'>RECENT POSTS</h1>
        <div>
          {otherposts.map((post)=>(
            <div key={post.$id} className='mx-4'>
              <PostCard post={post} classname='w-75'/>
            </div>
          ))}
        </div>
      </div>
}
    </div>
  )
}

export default Post
