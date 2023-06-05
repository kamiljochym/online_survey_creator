import React from 'react'

const Title = ({title, description, isEdit, updateHeader}) => {
  const handleEdit = (e, editWhat) => {
    if (editWhat === 'title') {
      updateHeader(e.target.value, description)
    }
    if (editWhat === 'description') {
      updateHeader(title, e.target.value)
    }
  }

  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <>
        <input
          className={`${
            isEdit
              ? ' mb-6 border-b-2 border-white outline-none hover:border-b-2 hover:border-dotted hover:border-gray-200  focus:border-b-2 focus:border-dotted focus:border-gray-800'
              : ''
          } ${
            title.length === 0 && !isEdit ? 'mb-0' : 'mb-2 '
          } w-full bg-white text-4xl `}
          placeholder={`${isEdit ? 'Question' : ''}`}
          disabled={!isEdit}
          onChange={(e) => handleEdit(e, 'title')}
          value={title}
        />
        <input
          className={`${
            isEdit
              ? 'mb-0 border-b-2 border-white outline-none hover:border-b-2 hover:border-dotted hover:border-gray-200  focus:border-b-2 focus:border-dotted focus:border-gray-800'
              : ''
          } ${
            description.length === 0 && !isEdit ? 'mb-0' : 'mb-0 '
          } w-full bg-white text-sm`}
          placeholder={`${isEdit ? 'Description (Optional)' : ''}`}
          disabled={!isEdit}
          onChange={(e) => handleEdit(e, 'description')}
          value={description}
        />
      </>
    </div>
  )
}

export default Title
