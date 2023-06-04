import React from 'react'
import MultipleChoiceRow from './MultipleChoiceRow'

const MultipleChoiceGrid = ({
  title,
  description,
  options,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  const optionsTest = [1, 2, 3, 4]
  return (
    <div className='container relative mb-6  max-w-screen-sm overflow-hidden rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description}</div>
      {/*Columns  */}
      <div className=' overflow-x-auto overflow-y-hidden'>
        <div className='table w-full table-auto'>
          {/* Options row */}
          <div className='mb-2 table-row items-center'>
            <div className='table-cell max-w-0 p-2'></div>
            <div className='table-cell w-[120px] min-w-[52px] p-2 text-center'>Col 1</div>
            <div className='table-cell w-[120px] min-w-[52px] p-2 text-center'>Col 1</div>

            <div className='table-cell w-[120px] min-w-[52px] p-2 text-center'>Col 8</div>

            <div className='table-cell w-[120px]  min-w-[52px] p-2 text-center'>
              Col 8
            </div>
          </div>
          {/* Row 1 */}
          <MultipleChoiceRow />
          <MultipleChoiceRow />
          <MultipleChoiceRow />
          <MultipleChoiceRow />
        </div>
      </div>
    </div>
  )
}

export default MultipleChoiceGrid
