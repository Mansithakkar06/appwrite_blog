import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../appwrite/auth'
import PostCard from '../components/PostCard'

function MyPosts() {
    const posts = useSelector(state => state.post.posts)
    const user=useSelector(state=>state.auth.user)
    const myposts = posts.filter((post) => (
        post.userid===user.$id
    ))
    return myposts.length>0? (
        <div className='p-3 flex'>
            {
                myposts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))
            }
        </div>
    ):
    (
        <div className='p-3 m-3'>
            <h1 className='text-3xl text-center text-red-500'>No Posts Yet!!</h1>
        </div>
    )
}

export default MyPosts
