import {useState} from 'react'
import React from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'

const LinearScale = ({
  title,
  description,
  options,
  sectionId,
  questionId,
  response,
  setResponse,
  isEdit,
  addQuestion,
  updateForm,
}) => {
  const optionsLinearScale = {
    startLabel: 'start',
    endLabel: 'end label',
    from: 1,
    to: 4,
  }
  // creates an array to create specified number of radio buttons
  const scale = []
  for (let i = optionsLinearScale.from; i <= optionsLinearScale.to; i++) {
    scale.push(i)
  }

  const handleChange = (val) => {
    const newResponse = response
    response.sections[sectionId][questionId] = val
    setResponse(newResponse)
  }

  //randomId is generated to stop conflicts between different multiple choice questions
  const randomID = Math.floor(Math.random() * 100000).toString()
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
      <div className='m-auto flex w-full flex-row justify-around'>
        <div className='flex items-center'>{optionsLinearScale.startLabel}</div>
        {scale.map((val, idx) => (
          <div key={idx} className='mb-2 flex flex-col gap-4 '>
            <label className='text-center' htmlFor={val + randomID}>
              {val}
            </label>
            <input
              className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
              onChange={() => handleChange(val)}
              type='radio'
              id={val + randomID}
              value={val + randomID}
              name={randomID}
            />
          </div>
        ))}
        <div className='flex items-center'>{optionsLinearScale.endLabel}</div>
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

export default LinearScale
