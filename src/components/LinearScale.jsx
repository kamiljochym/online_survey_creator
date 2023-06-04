import {useState} from 'react'
import React from 'react'

const LinearScale = ({title, description, options}) => {
  const optionsLinearScale = {
    startLabel: 'start',
    endLabel: 'end label',
    from: 1,
    to: 4,
  }
  const [chosenOption, setChosenOption] = useState(null)

  // creates an array to create specified number of radio buttons
  const scale = []
  for (let i = optionsLinearScale.from; i <= optionsLinearScale.to; i++) {
    scale.push(i)
  }

  //randomId is generated to stop conflicts between different multiple choice questions
  const randomID = Math.floor(Math.random() * 100000).toString()

  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-2'>{title}</div>
      <div className='mb-6 text-sm'>{description + chosenOption}</div>
      <div className='m-auto flex w-full flex-row justify-around'>
        <div className='flex items-center'>{optionsLinearScale.startLabel}</div>
        {scale.map((val) => (
          <div className='mb-2 flex flex-col gap-4 '>
            <label className='text-center' htmlFor={val + randomID}>
              {val}
            </label>
            <input
              className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
              onChange={() => setChosenOption(val)}
              type='radio'
              id={val + randomID}
              value={val + randomID}
              name={randomID}
            />
          </div>
        ))}
        <div className='flex items-center'>{optionsLinearScale.endLabel}</div>
      </div>
    </div>
  )
}

export default LinearScale
