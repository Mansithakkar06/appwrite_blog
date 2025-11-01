import React from 'react'

function SelectBox({label,id,options,error,validation,register}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
          <select id={id} className='bg-gray-400 rounded-md mx-2 w-lg my-2 p-1 border border-gray-800/30' {...register(id,validation)}>
            <option value="">Select Status</option>
            {options.map((option)=>(
                <option value={option.value} key={option.value}>{option.label}</option>
            ))}
          </select>
          {error && <p className='text-red-600 mx-5 '>{error.message}</p>}
    </div>
  )
}

export default SelectBox
