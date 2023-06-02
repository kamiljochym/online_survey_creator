import React from 'react'

const MultipleChoiceGrid = () => {
  return (
    <div className='relative container overflow-hidden  max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Multiple choice GRID???</div>
      {/*Columns  */}
      <div className=' overflow-y-hidden overflow-x-auto'>
        <div className='table'>
          {/* Options row */}
          <div className='table-row mb-2 items-center'>
            <div className='table-cell p-2'></div>
            <div className='table-cell p-2 min-w-[48px]'>Col 1</div>
            <div className='table-cell p-2 min-w-[48px]'>Col 1</div>
            <div className='table-cell p-2 min-w-[48px]'>Col 1</div>
            <div className='table-cell p-2 min-w-[48px]'>Col 1</div>
          </div>
          {/* Row 1 */}
          <div className='table-row items-center'>
            <div className='table-cell p-2'>Row 1</div>
            <div className='table-cell text-center p-2'>
              <input
                className='hover:cursor-pointer'
                type='radio'
                id='gridRow1Option1'
                value='gridRow1Option1'
                name='grid1'
              />
            </div>
            <div className='table-cell text-center p-2'>
              <input
                className='hover:cursor-pointer'
                type='radio'
                id='gridRow1Option2'
                value='gridRow1Option2'
                name='grid1'
              />
            </div>
            <div className='table-cell text-center p-2'>
              <input
                className='hover:cursor-pointer'
                type='radio'
                id='gridRow1Option1'
                value='gridRow1Option1'
                name='grid1'
              />
            </div>
            <div className='table-cell text-center p-2'>
              <input
                className='hover:cursor-pointer'
                type='radio'
                id='gridRow1Option1'
                value='gridRow1Option1'
                name='grid1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleChoiceGrid
