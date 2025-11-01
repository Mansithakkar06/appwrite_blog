import React, { useEffect, useState } from 'react'
import FormLayout from '../components/FormLayout'
import { useForm } from 'react-hook-form'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Textarea from '../components/Textarea'
import SelectBox from '../components/SelectBox'
import { retry } from '@reduxjs/toolkit/query'
import { createFile, createPost } from '../appwrite/post'
import { useDispatch, useSelector } from 'react-redux'
import { addpost } from '../redux/postSlice'
import { useNavigate } from 'react-router-dom'

function AddPost() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
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
  useEffect(() => {
    if (title) {
      const slug = createSlug(title)
      setValue("slug", slug)
    }
  }, [title, setValue]);
  const submitHandle = async(data) => {
    const image=data.image[0]?await createFile(data.image[0]):null;
    if(image){
      const post=await createPost(data.title,data.slug,data.description,data.status,image.$id,user.$id)
      if(post)
      {
        dispatch(addpost(post))
        setTimeout(() => {
          navigate("/")
        }, 500);
        setSuccess("post added successfully!!")
        setError("")
        reset()
      }
      else{
        setError("something went wrong!!")
        setSuccess("")
      }
    }
  }
  return (
    <div className='w-xl m-auto'>
      <FormLayout title="Add Post" error={error} success={success} >
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
            validation={{ required: "Image is required" }}
            placeholder='Enter Image URL'
            error={errors.slug}
          />

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

          <Button>Add</Button>
        </form>

      </FormLayout>
    </div>
  )
}

export default AddPost
