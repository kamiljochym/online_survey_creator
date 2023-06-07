import React, { useEffect, useState } from 'react'
import TitleText from './TitleText'
import EditMenu from './EditMenu'
import { Alert } from '@mui/material'

const TimeInput = ({
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
    const [time, setTime] = useState({ hour: '', minutes: '' })

    const setHour = (val) => {

        const newTime = {
            hour: val,
            minutes: time.minutes,
        }
        const newResponse = response
        response.sections[sectionId][questionId] = newTime
        setTime(newTime)
        setResponse(newResponse)
    }

    const setMinutes = (val) => {
        const newTime = {
            hour: time.hour,
            minutes: val,
        }
        const newResponse = response
        response.sections[sectionId][questionId] = newTime
        setTime(newTime)
        setResponse(newResponse)
    }
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

    const [alert, setAlert] = useState(false)

    const validateHour = (e) => {
        let val = e.target.value
        if (val.toString().length == 1) {
            console.log("0" + val.toString())
            val = "0" + val.toString()
            console.log(val)
            setHour(val)
        }
        if ((val < 24 && val > -1) || val === '') {
            setAlert(false)
        } else {
            setAlert(true)
        }
        if (time.minutes > 59) {
            setAlert(true)
        }
    }
    const validateMinutes = (e) => {
        let val = e.target.value
        if (val.toString().length == 1) {
            console.log("0" + val.toString())
            val = "0" + val.toString()
            console.log(val)
            setMinutes(val)

        }
        if ((val < 60 && val > -1) || val === '') {
            setAlert(false)
        } else {
            setAlert(true)
        }
        if (time.hour > 23) {
            setAlert(true)
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
            <div className='duration-800 flex origin-left transition-all  '>
                <input
                    className='bg-red w-[18px]   border-b-2 outline-none focus-within:border-b-2 focus-within:border-gray-800'
                    onChange={(e) => setHour(e.target.value)}
                    type='text'
                    maxLength={2}
                    placeholder='12'
                    value={response.sections[sectionId][questionId]?.hour ?? ''}
                    onBlur={(e) => validateHour(e)}
                />
                <div className='flex items-center justify-center p-1'>:</div>
                <input
                    className='bg-red w-[18px]  border-b-2 outline-none focus-within:border-b-2 focus-within:border-gray-800'
                    onChange={(e) => setMinutes(e.target.value)}
                    type='text'
                    maxLength={2}
                    placeholder='45'
                    value={response.sections[sectionId][questionId]?.minutes ?? ''}
                    onBlur={(e) => validateMinutes(e)}
                />
            </div>
            {alert && (
                <Alert severity='error' className='mt-2 w-2/4'>
                    Invalid Time
                </Alert>
            )}
            <EditMenu
                isEdit={isEdit}
                addQuestion={addQuestion}
                questionId={questionId}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default TimeInput
