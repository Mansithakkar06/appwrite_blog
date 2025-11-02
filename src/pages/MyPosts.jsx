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
    return (
        <div className='p-3 flex'>
            {
                myposts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))
            }

        </div>
    )
}

export default MyPosts
