import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TitleText from './TitleText'
import EditMenu from './EditMenu'

const DateInput = ({
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
  const [startDate, setStartDate] = useState(null)

  const handleChange = (date) => {
    const newResponse = response
    response.sections[sectionId][questionId] = date
    setResponse(newResponse)
    setStartDate(date)
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
      <div className=' w-fit'>
        <DatePicker
          className='duration-800 border-b-2 outline-none transition-all focus-within:border-b-2 focus-within:border-gray-800'
          selected={startDate}
          onChange={(date) => handleChange(date)}
          placeholderText='Select a Date'
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

export default DateInput
