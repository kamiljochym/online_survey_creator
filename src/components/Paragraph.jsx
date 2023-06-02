import React from 'react'

const Paragraph = () => {
  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Paragraph(long answer)?</div>
      <div className=''>
        <div className='w-full border-b-2   transition-all duration-800 focus-within:border-gray-800 focus-within:border-b-2 '>
          <input
            className='bg-red w-full outline-none'
            type='text'
            placeholder='Your answer (max char. 5000)'
          />
        </div>
      </div>
    </div>
  )
}

export default Paragraph
