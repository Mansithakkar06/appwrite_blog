import React, { use, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormLayout from '../components/FormLayout'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { getCurrentUser, loginUser } from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const {setSession,setUser}=useAuth()
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    const navigate=useNavigate()

    const submitHandle=async(data)=>{
        const user=await loginUser(data.email,data.password)
        if(user){
            const currentuser=getCurrentUser()
            setUser(currentuser)
            const sessionid=user.$id
            setSession(sessionid)
            setSuccess("Loggedin successfully!!")
            reset()
            setTimeout(() => {
                navigate('/')
            }, 500);
        }
        else{
            setError("Invalid username or password!!")
        }
    }
    return (
        <div className='w-xl m-auto'>
            <FormLayout title="Login" error={error} success={success}>
                <form onSubmit={handleSubmit(submitHandle)}>
                    <InputBox
                        label="Email"
                        id="email"
                        register={register}
                        validation={{
                            required: "Email is required!!",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "please enter valid email!!"
                            },
                        }}
                        error={errors.email}
                    />

                    <InputBox
                    label="Password"
                    type='password'
                    id="password"
                    register={register}
                    validation={{required:"Password is required!!"}}
                    error={errors.password}
                    />

                    <Button>Login</Button>
                </form>
            </FormLayout>
        </div>
    )
}
export default Login
