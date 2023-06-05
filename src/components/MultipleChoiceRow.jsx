import {radioClasses} from '@mui/material'
import React, {useState} from 'react'

const MultipleChoiceRow = ({rowTitle, options}) => {
  const optionsTest = [1, 2, 3, 4]
  const [selected, setSelected] = useState(null)

  const randomID = Math.floor(Math.random() * 100000).toString()
  return (
    <div className='table-row items-center'>
      <div className='table-cell min-w-[58px] max-w-0 p-2'>{rowTitle}</div>
      {optionsTest.map((option, idx) => (
        <div key={idx} className=' table-cell max-w-0 p-4 text-center'>
          <input
            className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
            onChange={() => setSelected(idx)}
            type='radio'
            id={idx}
            value={idx}
            name={randomID}
          />
        </div>
      ))}
    </div>
  )
}

export default MultipleChoiceRow
