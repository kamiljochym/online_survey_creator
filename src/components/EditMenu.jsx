import React, {useEffect, useRef, useState} from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const EditMenu = ({isEdit, handleEdit, addQuestion, questionId}) => {
  const [editMenuOpen, setEditMenuOpen] = useState(false)

  const ref = useRef()

  const handleEditMenu = () => {
    setEditMenuOpen(!editMenuOpen)
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
    <>
      {isEdit && (
        <div className='absolute bottom-2 right-2 z-20 flex justify-center gap-6 rounded-md border bg-white px-4 '>
          <div className='text-md text-3xl hover:cursor-pointer' onClick={handleEditMenu}>
            ...
          </div>
          <div
            className='text-md text-3xl hover:cursor-pointer'
            onClick={() => addQuestion(questionId, 'delete')}
          >
            <DeleteOutlineIcon />
          </div>
          <div
            className={`${
              editMenuOpen ? 'z-50 opacity-100' : 'pointer-events-none -z-10 opacity-0'
            } text-md absolute right-40 top-[-90px] rounded-md border bg-white py-2 duration-300 hover:cursor-pointer  `}
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
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('multiple_choice', 'type')}
            >
              Multiple Choice
            </div>
            <div
              className='z-10 p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('dropdown', 'type')}
            >
              Dropdown
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('checkboxes', 'type')}
            >
              Checkboxes
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('linear_scale', 'type')}
            >
              Linear Scale
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('date_input', 'type')}
            >
              Date
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('time_input', 'type')}
            >
              Time
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('multiple_choice_grid', 'type')}
            >
              Multiple Choice Grid
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('email_input', 'type')}
            >
              Email
            </div>
            <div
              className='p-2 px-4 hover:cursor-pointer hover:bg-gray-200'
              onClick={() => handleEdit('numeric_input', 'type')}
            >
              Numeric
            </div>
          </div>

          <div
            className='text-md  text-3xl hover:cursor-pointer'
            onClick={() => addQuestion(questionId)}
          >
            +
          </div>
        </div>
      )}
    </>
  )
}

export default EditMenu
