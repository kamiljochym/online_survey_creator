import React, {useState} from 'react'

const Checkboxes = ({
  title,
  description,
  options,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  const randomID = Math.floor(Math.random() * 100000).toString()

  const checkedArr = []
  for (let i = 0; i < options.length; i++) {
    checkedArr.push(false)
  }

  const [checked, setChecked] = useState(checkedArr)

  const handleChange = (idx) => {
    let newArr = [...checked]
    newArr[idx] = !newArr[idx]
    const newResponse = response
    response.sections[sectionId][questionId] = newArr
    setChecked(newArr)
    setResponse(newResponse)

    console.log(newResponse)
  }

  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description}</div>
      <div className='flex flex-col '>
        {options.map((option, idx) => (
          <div className='mb-4 flex gap-4 '>
            <input
              className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
              onChange={() => handleChange(idx)}
              type='checkbox'
              id={option + idx + randomID}
              value={option + idx + randomID}
              name={randomID}
            />
            <label htmlFor={option + idx + randomID}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checkboxes
