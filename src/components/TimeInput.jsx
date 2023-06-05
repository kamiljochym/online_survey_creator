import React, {useEffect, useState} from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'

const TimeInput = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
  isEdit,
  addQuestion,
  updateForm,
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
  const handleEdit = (e, editWhat) => {
    if (editWhat === 'title') {
      updateForm(sectionId, questionId, e.target.value, description)
    }
    if (editWhat === 'description') {
      updateForm(sectionId, questionId, title, e.target.value)
    }
    if (editWhat === 'type') {
      updateForm(sectionId, questionId, title, description, e)
    }
  }
  return (
    <div className='container relative mb-6 flex max-w-screen-sm flex-col rounded-md border bg-white p-6'>
      <TitleText
        isEdit={isEdit}
        handleEdit={handleEdit}
        description={description}
        title={title}
      />
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
      <EditMenu
        isEdit={isEdit}
        addQuestion={addQuestion}
        questionId={questionId}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default TimeInput
