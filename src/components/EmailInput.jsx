import React, {useState} from 'react'

const EmailInput = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  const handleChange = (val) => {
    const newResponse = response
    response.sections[sectionId][questionId] = val
    setResponse(newResponse)
  }

  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description}</div>
      <div className=''>
        <div className='duration-800 w-2/4   origin-left border-b-2 transition-all focus-within:border-b-2 focus-within:border-gray-800 '>
          <input
            className='bg-red i w-full outline-none'
            type='email'
            onChange={(e) => handleChange(e.target.value)}
            placeholder='Enter email'
          />
        </div>
      </div>
    </div>
  )
}

export default EmailInput
