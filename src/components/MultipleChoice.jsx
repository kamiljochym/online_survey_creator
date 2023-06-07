import React, { useState } from 'react'
import EditMenu from './EditMenu'
import TitleText from './TitleText'
import { motion, AnimatePresence } from 'framer-motion'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import MultipleInputBoxes from './MultipleInputBoxes'

const MultipleChoice = ({
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
    // TODO ADD A USESTATE TO KEEP TRACK OF THE ChOSEN VALUE SO THAT IT CAN BE SUBMITTED

    const [chosenOption, setChosenOption] = useState('')
    const randomID = Math.floor(Math.random() * 100000).toString()

    const handleChange = (option) => {
        const newResponse = response
        response.sections[sectionId][questionId] = option
        setResponse(newResponse)
    }

    const handleEdit = (e, editWhat, idx) => {
        if (editWhat === 'title') {
            updateForm(sectionId, questionId, e.target.value, description)
        }
        if (editWhat === 'description') {
            updateForm(sectionId, questionId, title, e.target.value)
        }
        if (editWhat === 'type') {
            updateForm(sectionId, questionId, title, description, e)
        }
        if (editWhat === 'optionsAdd') {
            const newOptions = [...options, 'Option ' + options.length]
            console.log(newOptions)
            updateForm(sectionId, questionId, title, description, null, newOptions)
        }
        if (editWhat === 'optionText') {
            const newOptions = [...options]
            newOptions[idx] = e.target.value
            console.log(newOptions)
            updateForm(sectionId, questionId, title, description, null, newOptions)
        }

        if (editWhat === 'optionDelete') {
            const newOptions = [...options]
            const firstHalf = newOptions.slice(0, idx)
            const secondHalf = newOptions.slice(idx + 1)
            console.log(newOptions)
            updateForm(
                sectionId,
                questionId,
                title,
                description,
                null,
                firstHalf.concat(secondHalf)
            )
        }
    }

    return (
        <div className='container relative mb-6 flex max-w-screen-sm flex-col rounded-md border bg-white p-6'>
            <TitleText
                isEdit={isEdit}
                handleEdit={handleEdit}
                description={description}
                title={title}
            />
            <MultipleInputBoxes handleChange={handleChange} options={options} randomID={randomID} isEdit={isEdit} handleEdit={handleEdit} type={'radio'} />


            <EditMenu
                isEdit={isEdit}
                addQuestion={addQuestion}
                questionId={questionId}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default MultipleChoice
