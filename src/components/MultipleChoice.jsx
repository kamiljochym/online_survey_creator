import React from 'react'

const MultipleChoice = () => {
  return (
    <div className='relative container mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Multiple choice questions???</div>
      <div className='flex flex-col '>
        <div className='flex gap-4 mb-2 '>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='option1'
            value='option1'
            name='multiple'
          />
          <label htmlFor='option1'>Option 1</label>
        </div>

        <div className='flex gap-4 mb-2 '>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='option2'
            value='option2'
            name='multiple'
          />
          <label htmlFor='option2'>Option 2</label>
        </div>
        <div className='flex gap-4 mb-2'>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='option3'
            value='option3'
            name='multiple'
          />
          <label htmlFor='option3'>Option 3</label>
        </div>
        <div className='flex gap-4 mb-2 '>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='option4'
            value='option4'
            name='multiple'
          />
          <label htmlFor='option4'>Option 4</label>
        </div>
      </div>
    </div>
  )
}

export default MultipleChoice
