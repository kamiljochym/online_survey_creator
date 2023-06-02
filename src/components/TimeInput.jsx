import React from 'react'

const TimeInput = () => {
  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Time</div>
      <div className='flex origin-left transition-all duration-800  '>
        <input
          className='bg-red w-[17px]   border-b-2 outline-none focus-within:border-gray-800 focus-within:border-b-2'
          type='text'
          placeholder='12'
        />
        <div className='flex justify-center p-1 items-center'>:</div>
        <input
          className='bg-red w-[17px]  border-b-2 outline-none focus-within:border-gray-800 focus-within:border-b-2'
          type='text'
          placeholder='45'
        />
      </div>
    </div>
  )
}

export default TimeInput
