import React from 'react'

function FormLayout({children,error,success,title}) {
    return (
        <div>
            <div className='p-3'>
                <h1 className='font-medium text-3xl text-center'>{title}</h1>
            </div>
            <div className='bg-gray-200 text-black rounded-lg px-7 py-6 w-xl'>
                <div className={`text-red-600 bg-rose-300 px-3 py-1 rounded-lg font-medium ${error === "" ? "hidden" : ""}`}>{error}</div>
                <div className={`text-green-800 bg-green-400 px-3 py-1 rounded-lg font-medium ${success === "" ? "hidden" : ""}`}>{success}</div>
                {children}
            </div>
        </div>
    )
}

export default FormLayout
