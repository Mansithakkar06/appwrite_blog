import React, { useEffect, useState } from 'react'
import FormLayout from '../components/FormLayout'
import { useForm } from 'react-hook-form'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Textarea from '../components/Textarea'
import SelectBox from '../components/SelectBox'
import { createFile, createPost, getFileview, updateDocument } from '../appwrite/post'
import { useDispatch, useSelector } from 'react-redux'
import { addpost, updatepost } from '../redux/postSlice'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [image, setImage] = useState("")
  const user = useSelector(state => state.auth.user)
  const posts = useSelector(state => state.post.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams("id")
  const { register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm()

  const title = watch('title')
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "_");
  }
  const post = posts.filter((post) => (
    post.$id === id
  ))

  const submitHandle = async (data) => {
    let image=post[0].image;
    if (data.image.length !== 0) {
      const file = await createFile(data.image[0]);
      image=file.$id
    }

    if (image) {
      const addpost = await updateDocument(post[0].$id, data.title, data.slug, data.description, data.status, image, user.$id, user.name)
      if (addpost) {
        dispatch(updatepost(addpost))
        setSuccess("post updated successfully!!")
        setError("")
        reset()
        setTimeout(() => {
          navigate("/")
        }, 500);
      }
      else {
        setError("something went wrong!!")
        setSuccess("")
      }
    }

  }
  useEffect(() => {
    if (title) {
      const slug = createSlug(title)
      setValue("slug", slug)
    }
  }, [title, setValue]);

  useEffect(() => {
    if (post[0]) {
      reset({
      "title": post[0].title,
      "slug": post[0].slug,
      "description": post[0].description,
      "status":post[0].status
    })

}
  }, []);
useEffect(() => {
  console.log(image)
}, [image]);
return (
  <div className='w-xl m-auto'>
    <FormLayout title="Edit Post" error={error} success={success} >
      <form onSubmit={handleSubmit(submitHandle)}>

        <InputBox
          label="Title"
          id="title"
          register={register}
          validation={{ required: "Title is required" }}
          placeholder='Enter Post Title'
          error={errors.title}
        />

        <InputBox
          label="Slug"
          id="slug"
          register={register}
          validation={{ required: "Slug is required" }}
          placeholder='Enter Post Slug'
          error={errors.slug}
        />

        <Textarea
          label="Description"
          id="description"
          register={register}
          validation={{ required: "Description is required" }}
          placeholder="Enter Post Description"
          error={errors.description}
        />

        <InputBox
          label="Image"
          id="image"
          type='file'
          register={register}
          placeholder='Enter Image URL'
          error={errors.slug}
        />
        {post[0].image && <img src={getFileview(post[0].image)} alt="image" className='m-auto w-48 h-25' />}

        <SelectBox
          label="Status"
          id="status"
          register={register}
          validation={{ required: "Status is required!!" }}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" }
          ]}
          error={errors.status}
        />

        <Button>Update</Button>
      </form>

    </FormLayout>
  </div>
)
}

export default EditPost
