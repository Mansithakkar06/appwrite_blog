import React from 'react'

function Button({children}) {
    return (
        <div className='flex mt-2'>
            <button className='bg-green-700 p-3 rounded-lg m-auto text-white'>{children}</button>
        </div>
    )
}

export default Button
