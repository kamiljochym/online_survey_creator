import React, {useState, useRef, useEffect} from 'react'

const Dropdown = () => {
  const ref = useRef()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Choose')

  const handleDropdownState = () => {
    setDropdownOpen(!dropdownOpen)
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

  return (
    <div className='relative container mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Dropdown</div>

      <div className='border-2 rounded-md' ref={ref} onClick={handleDropdownState}>
        <div className='flex justify-between rounded-4 p-8 pt-4 pb-4 hover:cursor-pointer'>
          <div>{selectedItem}</div>
          <div>^</div>
        </div>
        <ul
          className={`${
            dropdownOpen ? 'z-10 opacity-100' : '-z-10 opacity-0'
          } absolute top-8 left-12 border-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white max-w-none transition-all duration-200`}
        >
          <li className='p-8 pt-3 pb-3 mt-2 hover:cursor-pointer hover:bg-gray-200'>
            Choose
          </li>
          <div className='m-auto w-full h-0.5 mt-2 mb-2 bg-gray-200'></div>
          <li className='p-8 pt-3 pb-3 hover:cursor-pointer hover:bg-gray-200'>
            option 1 Option 1 but this option is quite long to test for long options
            option 1 Option 1 but this option is quite long to test for long options
          </li>
          <li className='p-8 pt-3 pb-3 hover:cursor-pointer hover:bg-gray-200'>
            option 2
          </li>
          <li className='p-8 pt-3 pb-3 hover:cursor-pointer hover:bg-gray-200'>
            option 3
          </li>
          <li className='p-8 pt-3 pb-3 hover:cursor-pointer hover:bg-gray-200'>
            option 4
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Dropdown
