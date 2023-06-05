import React from 'react'

const TitleText = ({isEdit, handleEdit, description, title}) => {
  return (
    <>
      <input
        className={`${
          isEdit
            ? ' mb-2 border-b-2 border-white outline-none hover:border-b-2 hover:border-dotted hover:border-gray-200  focus:border-b-2 focus:border-dotted focus:border-gray-800'
            : ''
        } ${title.length === 0 && !isEdit ? 'mb-0' : 'mb-2 '}  bg-white `}
        placeholder={`${isEdit ? 'Question' : ''}`}
        disabled={!isEdit}
        onChange={(e) => handleEdit(e, 'title')}
        value={title}
      />
      <input
        className={`${
          isEdit
            ? 'mb-6 border-b-2 border-white outline-none hover:border-b-2 hover:border-dotted hover:border-gray-200  focus:border-b-2 focus:border-dotted focus:border-gray-800'
            : ''
        } ${description.length === 0 && !isEdit ? 'mb-0' : 'mb-6 '} bg-white text-sm`}
        placeholder={`${isEdit ? 'Description (Optional)' : ''}`}
        disabled={!isEdit}
        onChange={(e) => handleEdit(e, 'description')}
        value={description}
      />
    </>
  )
}

export default TitleText
