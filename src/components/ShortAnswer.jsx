import React from 'react'

const ShortAnswer = () => {
  return (
      <div className='relative container bg-white p-6 rounded-md'>
        <div className='mb-4'>Question?</div>
        <div className=''>
          <div className='w-2/4 border-b-2  border-gray-300 origin-left transition-all duration-600 focus-within:border-gray-800 focus-within:border-b-2 '>
            <input
              className='bg-red w-full outline-none'
              type='text'
              placeholder='Answer here'
            />
          </div>
        </div>
      </div>
  )
}

export default ShortAnswer