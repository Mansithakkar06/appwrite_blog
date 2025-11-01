import React from 'react'

function Textarea({id,label,rows=5,cols=50,placeholder,register,classname,error,validation}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label><br />
          <textarea
            rows={rows}
            cols={cols}
            placeholder={placeholder}
            id={id}
            {...register(id,validation)}
            className={`bg-gray-400 rounded-md mx-2 w-lg my-2 p-1 border border-gray-800/30 ${classname}`}>
          </textarea>
        {error&&<p className='text-red-600 mx-5 '>{error.message}</p>}

    </div>
  )
}

export default Textarea
