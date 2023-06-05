import React, {useState} from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'

const Checkboxes = ({
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
  const randomID = Math.floor(Math.random() * 100000).toString()

  const checkedArr = []
  for (let i = 0; i < options.length; i++) {
    checkedArr.push(false)
  }

  const [checked, setChecked] = useState(checkedArr)

  const handleChange = (idx) => {
    let newArr = [...checked]
    newArr[idx] = !newArr[idx]
    const newResponse = response
    response.sections[sectionId][questionId] = newArr
    setChecked(newArr)
    setResponse(newResponse)

    console.log(newResponse)
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
      <div className='flex flex-col '>
        {options.map((option, idx) => (
          <div className='mb-4 flex gap-4 '>
            <input
              className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
              onChange={() => handleChange(idx)}
              type='checkbox'
              id={option + idx + randomID}
              value={option + idx + randomID}
              name={randomID}
            />
            <label htmlFor={option + idx + randomID}>{option}</label>
          </div>
        ))}
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

export default Checkboxes
