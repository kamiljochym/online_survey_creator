import React from 'react'
import MultipleChoiceRow from './MultipleChoiceRow'
import TitleText from './TitleText'
import EditMenu from './EditMenu'

const MultipleChoiceGrid = ({
  title,
  description,
  options,
  sectionId,
  questionId,
  response,
  setResponse,
  isEdit,
  addQuestion,
  updateForm,
}) => {
  const optionsTest = [1, 2, 3, 4]
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
    <div className='container relative mb-6 flex max-w-screen-sm  flex-col overflow-hidden rounded-md border bg-white p-6'>
      <TitleText
        isEdit={isEdit}
        handleEdit={handleEdit}
        description={description}
        title={title}
      />
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
      <EditMenu
        isEdit={isEdit}
        addQuestion={addQuestion}
        questionId={questionId}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default MultipleChoiceGrid
