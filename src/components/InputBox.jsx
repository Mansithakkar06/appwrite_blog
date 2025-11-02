import React from 'react'

function InputBox({ id, label, type = "text",register,validation="",error,placeholder="",className="",props }) {

    return (
        <div>
            <label htmlFor={id}>{label}</label>

            <input type={type} 
            {...register(id, validation)} 
            id={id}
            placeholder={placeholder}
            {...props}
            className={`bg-gray-400 rounded-md mx-2 my-2 p-1 w-lg border border-gray-800/30 ${className}`}
            />
            {error&&<p className='text-red-600 mx-5 '>{error.message}</p>}
        </div>
    )
}

export default InputBox
