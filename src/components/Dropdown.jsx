import React, {useState, useRef, useEffect} from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Dropdown = ({
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
  const ref = useRef()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Choose')

  const handleDropdownState = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleChange = (option) => {
    const newResponse = response
    response.sections[sectionId][questionId] = option
    setSelectedItem(option)
    setResponse(newResponse)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (ref.current && !ref.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [dropdownOpen])

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
    <div className='container relative mb-6 flex max-w-screen-sm flex-col rounded-md border bg-white p-6 '>
      <TitleText
        isEdit={isEdit}
        handleEdit={handleEdit}
        description={description}
        title={title}
      />

      <div
        className='relative w-auto rounded-md border'
        ref={ref}
        onClick={handleDropdownState}
      >
        <div className='rounded-4 flex justify-between p-8 pb-4 pt-4 hover:cursor-pointer'>
          <div>{selectedItem}</div>
          <KeyboardArrowDownIcon />
        </div>
        <ul
          className={`${
            dropdownOpen ? 'z-10 opacity-100' : '-z-10 opacity-0'
          } absolute top-[-1px] h-auto w-full max-w-screen-sm rounded-md border bg-white transition-all duration-200`}
        >
          <li
            className='mt-1 w-auto p-8 pb-3 pt-3 hover:cursor-pointer hover:bg-gray-200'
            onClick={() => handleChange('Choose')}
          >
            Choose
          </li>
          <div className='m-auto mb-1 mt-1 h-px w-full bg-gray-200'></div>
          {options.map((option, idx) => (
            <li
              className='w-auto p-8 pb-3 pt-3 hover:cursor-pointer hover:bg-gray-200'
              id={idx}
              key={idx}
              onClick={() => handleChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
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
export default Dropdown
