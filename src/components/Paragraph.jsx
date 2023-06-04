import React from 'react'

const Paragraph = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  const handleChange = (e) => {
    const newResponse = response
    response.sections[sectionId][questionId] = e.target.value
    setResponse(newResponse)
  }

  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description}</div>
      <div className=''>
        <div className='duration-800 w-full   border-b-2 transition-all focus-within:border-b-2 focus-within:border-gray-800 '>
          <input
            className='bg-red w-full outline-none'
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Your answer (max char. 5000)'
          />
        </div>
      </div>
    </div>
  )
}

export default Paragraph
