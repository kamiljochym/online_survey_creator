import React from 'react'
import EditMenu from './EditMenu'
import TitleText from './TitleText'

const Paragraph = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
  addQuestion,
  updateForm,
  isEdit,
}) => {
  const handleChange = (e) => {
    const newResponse = response
    response.sections[sectionId][questionId] = e.target.value
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
      <div className=''>
        <div className='duration-800 w-full border-b-2 transition-all focus-within:border-b-2 focus-within:border-gray-800 '>
          <input
            className='bg-red w-full outline-none'
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Your answer (max char. 5000)'
          />
        </div>
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

export default Paragraph
