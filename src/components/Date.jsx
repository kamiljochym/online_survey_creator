import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateInput = () => {
  const [startDate, setStartDate] = useState(null)

  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Date</div>
      <div className=' w-fit'>
        <DatePicker
          className='border-b-2 outline-none transition-all duration-800 focus-within:border-gray-800 focus-within:border-b-2'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText='Select a Date'
        />
      </div>
    </div>
  )
}

export default DateInput
