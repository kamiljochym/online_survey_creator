import React, {useEffect, useState} from 'react'

const TimeInput = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  const [time, setTime] = useState({hour: null, minutes: null})

  const setHour = (val) => {
    const newTime = {
      hour: val,
      minutes: time.minutes,
    }
    const newResponse = response
    response.sections[sectionId][questionId] = newTime
    setResponse(newResponse)
  }

  const setMinutes = (val) => {
    const newTime = {
      hour: time.hour,
      minutes: val,
    }
    const newResponse = response
    response.sections[sectionId][questionId] = newTime
    setResponse(newResponse)
  }
  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title + response.sections[sectionId][questionId]}</div>
      <div className='mb-6 text-sm'>{description}</div>
      <div className='duration-800 flex origin-left transition-all  '>
        <input
          className='bg-red w-[17px]   border-b-2 outline-none focus-within:border-b-2 focus-within:border-gray-800'
          onChange={(e) => setHour(e.target.value)}
          type='text'
          maxLength={2}
          placeholder='12'
        />
        <div className='flex items-center justify-center p-1'>:</div>
        <input
          className='bg-red w-[17px]  border-b-2 outline-none focus-within:border-b-2 focus-within:border-gray-800'
          onChange={(e) => setMinutes(e.target.value)}
          type='text'
          maxLength={2}
          placeholder='45'
        />
      </div>
    </div>
  )
}

export default TimeInput
