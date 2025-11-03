import React from 'react'

function Button({children}) {
    return (
        <div className='flex mt-2'>
            <button type='submit' className='bg-green-700 py-2 px-4 rounded-lg m-auto text-white hover:bg-green-800 hover:cursor-pointer'>{children}</button>
        </div>
    )
}

export default Button
