import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateInput = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  const [startDate, setStartDate] = useState(null)

  const handleChange = (date) => {
    const newResponse = response
    response.sections[sectionId][questionId] = date
    setResponse(newResponse)
    setStartDate(date)
  }
  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description}</div>
      <div className=' w-fit'>
        <DatePicker
          className='duration-800 border-b-2 outline-none transition-all focus-within:border-b-2 focus-within:border-gray-800'
          selected={startDate}
          onChange={(date) => handleChange(date)}
          placeholderText='Select a Date'
        />
      </div>
    </div>
  )
}

export default DateInput
