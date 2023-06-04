import React, {useState} from 'react'

const MultipleChoice = ({
  title,
  description,
  options,
  sectionId,
  questionId,
  response,
  setResponse,
}) => {
  // TODO ADD A USESTATE TO KEEP TRACK OF THE ChOSEN VALUE SO THAT IT CAN BE SUBMITTED

  const [chosenOption, setChosenOption] = useState('')
  const randomID = Math.floor(Math.random() * 100000).toString()

  const handleChange = (option) => {
    const newResponse = response
    response.sections[sectionId][questionId] = option
    setResponse(newResponse)
  }

  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description + chosenOption}</div>
      <div className='flex flex-col '>
        {options.map((option, idx) => (
          <div className='mb-4 flex gap-4' id={idx}>
            <input
              className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
              type='radio'
              id={option + idx + randomID}
              value={option + idx + randomID}
              name={randomID}
              onChange={() => handleChange(option)}
            />
            <label htmlFor={option + idx + randomID}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MultipleChoice
