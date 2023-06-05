import React, {useState} from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'
import {Alert} from '@mui/material'

const EmailInput = ({
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
  const handleChange = (val) => {
    const newResponse = response
    response.sections[sectionId][questionId] = val
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

  const [alert, setAlert] = useState(false)

  const validate = (e) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(e.target.value) || e.target.value === '') {
      setAlert(false)
    } else {
      setAlert(true)
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
        <div className='duration-800 w-2/4   origin-left border-b-2 transition-all focus-within:border-b-2 focus-within:border-gray-800 '>
          <input
            className='bg-red i invalid:ouline-red-500 w-full outline-none invalid:outline focus:outline-none'
            type='email'
            onChange={(e) => handleChange(e.target.value)}
            onBlur={(e) => validate(e)}
            placeholder='Enter email'
          />
        </div>
      </div>
      {alert && (
        <Alert severity='error' className='mt-2 w-2/4'>
          Invalid Email
        </Alert>
      )}
      <EditMenu
        isEdit={isEdit}
        addQuestion={addQuestion}
        questionId={questionId}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default EmailInput
