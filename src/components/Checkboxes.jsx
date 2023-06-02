import React from 'react'

const Checkboxes = () => {
  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Checkboxes??</div>
      <div className='flex flex-col '>
        <div className='flex gap-4 mb-2 '>
          <input
            className='hover:cursor-pointer'
            type='checkbox'
            id='checkbox1'
            value='checkbox1'
            name='checkbox'
          />
          <label htmlFor='checkbox1'>Option 1</label>
        </div>

        <div className='flex gap-4 mb-2 '>
          <input
            className='hover:cursor-pointer'
            type='checkbox'
            id='checkbox2'
            value='checkbox2'
            name='checkbox'
          />
          <label htmlFor='checkbox2'>Option 2</label>
        </div>
        <div className='flex gap-4 mb-2'>
          <input
            className='hover:cursor-pointer'
            type='checkbox'
            id='checkbox3'
            value='checkbox3'
            name='checkbox'
          />
          <label htmlFor='checkbox3'>Option 3</label>
        </div>
        <div className='flex gap-4 mb-2 '>
          <input
            className='hover:cursor-pointer'
            type='checkbox'
            id='checkbox4'
            value='checkbox4'
            name='checkbox'
          />
          <label htmlFor='checkbox4'>Option 4</label>
        </div>
      </div>
    </div>
  )
}

export default Checkboxes
