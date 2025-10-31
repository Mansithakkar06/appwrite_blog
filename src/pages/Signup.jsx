import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from '../appwrite/auth'
import FormLayout from '../components/FormLayout'
import InputBox from '../components/InputBox'
import Button from '../components/Button'

function Signup() {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const { register,
        formState: { errors },
        handleSubmit,
        reset } = useForm()

    const submitHandle = async (data) => {
        if (data.password !== data.confirm) {
            setError("Password and confirm password must be same!!")
            setSuccess("")
        }
        else if (data.password.length < 8 || data.confirm.length < 8) {
            setError("passsword length must be more than 8!!")
            setSuccess("")
        }
        else {
            const user = await createUser(data.email, data.password, data.name);
            if (user) {
                setSuccess("User Created successfully!!")
                setError("")
                reset();
            }
            else {
                setError("User already exists!!")
                setSuccess("")
            }

        }
    }

    return (
        <div className='w-xl m-auto'>
            <FormLayout title="Signup" error={error} success={success}>
                <form onSubmit={handleSubmit(submitHandle)}>

                    <InputBox
                        label="Name"
                        id="name"
                        register={register}
                        validation={{ required: "Name is required!!" }}
                        error={errors.name}
                    />

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
                        id="password"
                        type='password'
                        register={register}
                        validation={{
                            required: "Password is required!!",
                        }}
                        error={errors.password}
                    />

                    <InputBox
                        label="Confirm Password"
                        id="confirm"
                        type='password'
                        register={register}
                        validation={{
                            required: "Confirm Password is required!!",
                        }}
                        error={errors.confirm}
                    />

                    <Button>Submit</Button>

                </form>
            </FormLayout>
        </div>
    )
}

export default Signup
