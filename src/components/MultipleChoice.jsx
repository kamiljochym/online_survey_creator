import React, {useState} from 'react'
import EditMenu from './EditMenu'
import TitleText from './TitleText'

const MultipleChoice = ({
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
  // TODO ADD A USESTATE TO KEEP TRACK OF THE ChOSEN VALUE SO THAT IT CAN BE SUBMITTED

  const [chosenOption, setChosenOption] = useState('')
  const randomID = Math.floor(Math.random() * 100000).toString()

  const handleChange = (option) => {
    const newResponse = response
    response.sections[sectionId][questionId] = option
    setResponse(newResponse)
  }

  const handleEdit = (e, editWhat, idx) => {
    if (editWhat === 'title') {
      updateForm(sectionId, questionId, e.target.value, description)
    }
    if (editWhat === 'description') {
      updateForm(sectionId, questionId, title, e.target.value)
    }
    if (editWhat === 'type') {
      updateForm(sectionId, questionId, title, description, e)
    }
    if (editWhat === 'optionsAdd') {
      const newOptions = [...options, 'Option ' + options.length]
      console.log(newOptions)
      updateForm(sectionId, questionId, title, description, null, newOptions)
    }
    if (editWhat === 'optionText') {
      const newOptions = [...options]
      newOptions[idx] = e.target.value
      console.log(newOptions)
      updateForm(sectionId, questionId, title, description, null, newOptions)
    }

    if (editWhat === 'optionDelete') {
      const newOptions = [...options]
      const firstHalf = newOptions.slice(0, idx)
      const secondHalf = newOptions.slice(idx + 1)
      console.log(newOptions)
      updateForm(
        sectionId,
        questionId,
        title,
        description,
        null,
        firstHalf.concat(secondHalf)
      )
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
      <div className='flex flex-col '>
        {options.map((option, idx) => (
          <div className='mb-4 flex gap-4' id={idx}>
            <input
              className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
              type='radio'
              id={option + idx + randomID}
              value={option + idx + randomID}
              name={randomID}
              onChange={() => handleChange(option)}
              disabled={isEdit}
            />
            {isEdit ? (
              <div className='relative w-full cursor-pointer border-b-2 border-dotted border-white text-gray-600  outline-none hover:border-b-2 hover:border-gray-200 '>
                <input
                  className='w-full outline-none focus:border-gray-800'
                  value={option}
                  onChange={(e) => handleEdit(e, 'optionText', idx)}
                />
                <div
                  className='absolute right-4 top-0 cursor-pointer rounded-md border bg-white px-2'
                  onClick={(e) => handleEdit(e, 'optionDelete', idx)}
                >
                  X
                </div>
              </div>
            ) : (
              <label className='whitespace-nowrap' htmlFor={option + idx + randomID}>
                {option}
              </label>
            )}
          </div>
        ))}
        {isEdit && (
          <div
            className='mb-4 flex gap-4 hover:cursor-pointer'
            onClick={() => handleEdit(options.length, 'optionsAdd')}
          >
            <input
              className='h-6 w-6 hover:cursor-pointer'
              type='radio'
              disabled={true}
            />
            <label className='cursor-pointer border-b-2 border-dotted border-white text-gray-600  hover:border-b-2 hover:border-gray-200'>
              Add Option
            </label>
          </div>
        )}
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

export default MultipleChoice
