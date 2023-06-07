import React from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'

const MultipleInputBoxes = ({ handleChange, randomID, options, isEdit, handleEdit, type }) => {
    return (
        <div className='flex flex-col '>
            {options.map((option, idx) => (
                <div key={idx} className='mb-4 flex gap-4' id={idx}>
                    <input
                        className='h-6 w-6 before:m-[0%] before:block before:h-[10%] before:w-[10%] before:rounded-full before:p-[50%] before:duration-300 hover:cursor-pointer hover:before:shadow-[0_0_0_8px_rgba(59,130,246,0.2)]'
                        type={type}
                        id={option + idx + randomID}
                        value={option + idx + randomID}
                        name={randomID}
                        onChange={type === 'radio' ? () => handleChange(option) :
                            () => handleChange(idx)}
                        disabled={isEdit}
                    />
                    {isEdit ? (
                        <div className='relative w-full cursor-pointer border-b-2 border-dotted border-white text-gray-600  outline-none hover:border-b-2 hover:border-gray-200 '>
                            <input
                                className='w-full outline-none focus:border-gray-800'
                                value={option}
                                onChange={(e) => handleEdit(e, 'optionText', idx)}
                            />
                            <div
                                className='absolute right-4 top-0 cursor-pointer rounded-md border bg-white '
                                onClick={(e) => handleEdit(e, 'optionDelete', idx)}
                            >
                                <CloseTwoToneIcon />
                            </div>
                        </div>
                    ) : (
                        <label className='whitespace-nowrap' htmlFor={option + idx + randomID}>
                            {option}
                        </label>
                    )}
                </div>
            ))}
            {isEdit && (
                <div
                    className='mb-4 flex gap-4 hover:cursor-pointer'
                    onClick={() => handleEdit(options.length, 'optionsAdd')}
                >
                    <input
                        className='h-6 w-6 hover:cursor-pointer'
                        type={type}
                        disabled={true}
                    />
                    <label className='cursor-pointer border-b-2 border-dotted border-white text-gray-600  hover:border-b-2 hover:border-gray-200'>
                        Add Option
                    </label>
                </div>
            )}
        </div>
    )
}


export default MultipleInputBoxes
