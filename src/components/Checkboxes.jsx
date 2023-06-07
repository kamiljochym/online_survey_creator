import React, { useState } from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'
import MultipleInputBoxes from './MultipleInputBoxes'

const Checkboxes = ({
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
            <MultipleInputBoxes handleChange={handleChange} options={options} randomID={randomID} isEdit={isEdit} handleEdit={handleEdit} type={'checkbox'} />
            <EditMenu
                isEdit={isEdit}
                addQuestion={addQuestion}
                questionId={questionId}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default Checkboxes
