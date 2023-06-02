import React from 'react'

const EmailInput = () => {
  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Email?</div>
      <div className=''>
        <div className='w-2/4 border-b-2   origin-left transition-all duration-800 focus-within:border-gray-800 focus-within:border-b-2 '>
          <input
            className='bg-red w-full outline-none i'
            type='email'
            placeholder='Enter email'
          />
        </div>
      </div>
    </div>
  )
}

export default EmailInput
