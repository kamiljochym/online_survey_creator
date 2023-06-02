import React from 'react'

const ShortAnswer = () => {
  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Short answer?</div>
      <div className=''>
        <div className='w-2/4 border-b-2  border-gray-300 origin-left transition-all duration-600 focus-within:border-gray-800 focus-within:border-b-2 '>
          <input
            className='bg-red w-full outline-none'
            type='text'
            placeholder='Your answer (max char. 255)'
          />
        </div>
      </div>
    </div>
  )
}

export default ShortAnswer
