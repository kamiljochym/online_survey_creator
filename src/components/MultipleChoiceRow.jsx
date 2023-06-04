import React from 'react'

const MultipleChoiceRow = ({options}) => {
  const optionsTest = [1, 2, 3, 4]
  return (
    <div className='table-row items-center'>
      <div className='table-cell min-w-[58px] max-w-0 p-2'>Row 1</div>
      {optionsTest.map((option, idx) => (
        <div key={idx} className=' table-cell max-w-0 p-4 text-center'>
          <input
            className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
            type='radio'
            id='gridRow1Option1'
            value='gridRow1Option1'
            name='grid1'
          />
        </div>
      ))}
    </div>
  )
}

export default MultipleChoiceRow
