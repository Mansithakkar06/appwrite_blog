import React from 'react'

function FormLayout({children,error,success,title}) {
    return (
        <div className='p-3 mt-5'>
            <div className='bg-slate-300 text-black rounded-lg px-7 py-6 w-xl'>
                <h1 className='font-medium text-3xl text-gray-300 bg-gray-700 rounded-lg text-center p-2 mb-4'>{title}</h1>
                <div className={`text-red-600 bg-rose-300 px-3 py-1 rounded-lg font-medium ${error === "" ? "hidden" : ""}`}>{error}</div>
                <div className={`text-green-800 bg-green-400 px-3 py-1 rounded-lg font-medium ${success === "" ? "hidden" : ""}`}>{success}</div>
                {children}
            </div>
        </div>
    )
}

export default FormLayout
