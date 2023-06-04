import React, {useState, useEffect, useRef} from 'react'

const ShortAnswer = ({
  title,
  description,
  sectionId,
  questionId,
  response,
  setResponse,
  isEdit,
  addQuestion,
  updateForm,
}) => {
  const ref = useRef()
  const [titleText, setTitleText] = useState(title)
  const [descriptionText, setDescriptionText] = useState(description)
  const [editMenuOpen, setEditMenuOpen] = useState(false)

  const handleEditMenu = () => {
    setEditMenuOpen(!editMenuOpen)
  }

  const handleEdit = (e, editWhat) => {
    if (editWhat === 'title') {
      setTitleText(e.target.value)
      updateForm(sectionId, questionId, e.target.value, description)
    }
    if (editWhat === 'description') {
      setDescriptionText(e.target.value)
      updateForm(sectionId, questionId, title, e.target.value)
    }
    if (editWhat === 'type') {
      updateForm(sectionId, questionId, title, description, e)
    }
  }

  const handleChange = (e) => {
    const newResponse = response
    response.sections[sectionId][questionId] = e.target.value
    setResponse(newResponse)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (ref.current && !ref.current.contains(e.target)) {
        setEditMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [editMenuOpen])

  return (
    <div className='container relative z-0 mb-6 flex max-w-screen-sm flex-col rounded-md border bg-white p-6'>
      <input
        className={`${
          !isEdit
            ? ' border-b-2 border-white outline-none hover:border-b-2 hover:border-dotted hover:border-gray-200  focus:border-b-2 focus:border-dotted focus:border-gray-800'
            : ''
        } mb-2  bg-white `}
        placeholder='Question'
        disabled={isEdit}
        onChange={(e) => handleEdit(e, 'title')}
        value={title}
      />
      <input
        className={`${
          !isEdit
            ? ' border-b-2 border-white outline-none hover:border-b-2 hover:border-dotted hover:border-gray-200  focus:border-b-2 focus:border-dotted focus:border-gray-800'
            : ''
        } mb-6 text-sm`}
        placeholder='Description (Optional)'
        disabled={isEdit}
        onChange={(e) => handleEdit(e, 'description')}
        value={description}
      />

      <div className=''>
        <div className='duration-800 w-2/4   origin-left border-b-2 transition-all focus-within:border-b-2 focus-within:border-gray-800 '>
          <input
            className='bg-red w-full outline-none'
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Your answer (max char. 255)'
          />
        </div>
      </div>

      <div
        className='text-md absolute bottom-2 right-14 text-3xl hover:cursor-pointer'
        onClick={handleEditMenu}
      >
        ...
      </div>

      <div
        className={`${
          editMenuOpen ? 'z-10 opacity-100' : '-z-10 opacity-0'
        } text-md absolute bottom-2 right-24 rounded-md border bg-white py-2 duration-300 hover:cursor-pointer  `}
        onClick={handleEditMenu}
      >
        <div
          className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
          onClick={() => handleEdit('short_answer', 'type')}
        >
          Short Answer
        </div>
        <div
          className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
          onClick={() => handleEdit('paragraph', 'type')}
        >
          Paragraph
        </div>
        <div className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'>Paragraph</div>
        <div className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'>Paragraph</div>
        <div className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'>Paragraph</div>
      </div>

      <div
        className='text-md absolute bottom-2 right-4 text-3xl hover:cursor-pointer'
        onClick={() => addQuestion(questionId)}
      >
        +
      </div>
    </div>
  )
}

export default ShortAnswer
