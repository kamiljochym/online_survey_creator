import Image from 'next/image'
import { Inter } from 'next/font/google'
import ShortAnswer from '@/components/ShortAnswer'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import MultipleChoice from '@/components/MultipleChoice'
import Dropdown from '@/components/Dropdown'
import Checkboxes from '@/components/Checkboxes'
import LinearScale from '@/components/LinearScale'
import DateInput from '@/components/Date'
import TimeInput from '@/components/TimeInput'
import MultipleChoiceGrid from '@/components/MultipleChoiceGrid'
import EmailInput from '@/components/EmailInput'
import NumericInput from '@/components/NumericInput'
import { useState } from 'react'
import { TransitionGroup } from 'react-transition-group'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const options = ['Option A', 'Option B', 'Option C', 'Option D']
    const formExample = {
        title: 'Online Survey',
        description: 'Description of online survey',
        sections: [
            [
                {
                    type: 'short_answer',
                    title: 'Short answer question',
                    description: 'Short answer description',
                },
                {
                    type: 'paragraph',
                    title: 'Paragraph question',
                    description: '',
                },
                {
                    type: 'multiple_choice',
                    title: 'Choose an option',
                    description: 'Pick the best option',
                    options: options,
                },
                {
                    type: 'dropdown',
                    title: 'Dropdown answer question four',
                    description: '',
                    options: options,
                },
                {
                    type: 'checkboxes',
                    title: 'Checkbox answer question four',
                    description: 'Checkboxes answer desc',
                    options: options,
                },
                {
                    type: 'linear_scale',
                    title: 'Linear answer question four',
                    description: 'Linear answer description',
                    optionsLinearScale: {
                        startLabel: 'start',
                        from: 1,
                        to: 4,
                    },
                },
                {
                    type: 'date_input',
                    title: 'Date answer question four',
                    description: '',
                },
                {
                    type: 'time_input',
                    title: 'Time answer question four',
                    description: 'With validation',
                },
                {
                    type: 'multiple_choice_grid',
                    title: 'Multiple grid answer question four',
                    description: '',
                    options: options,
                },
                {
                    type: 'email_input',
                    title: 'Email answer question four',
                    description: 'With validation',
                },
                {
                    type: 'numeric_input',
                    title: 'Numeric answer question four',
                    description: 'Only allows numeric characters',
                },
            ],
            [],
            [],
        ],
    }

    const defaultForm = {
        title: 'Form title',
        description: '',
        sections: [[{ type: 'short_answer', title: 'Question', description: '' }], [], []],
    }

    const [form, setForm] = useState(formExample)
    const [isEdit, setIsEdit] = useState(false)


    // MAKE EVERY DIV AN INPUT SO YOU CAN DISABLE THEM IF NOT EDITING (genius)

    const defaultShortAnswer = {
        type: 'short_answer',
        title: '',
        description: '',
    }
    const defaultParagraph = {
        type: 'paragraph',
        title: '',
        description: '',
    }
    const defaultMultipleChoice = {
        type: 'multiple_choice',
        title: '',
        description: '',
        options: options,
    }
    const defaultDropdown = {
        type: 'dropdown',
        title: '',
        description: '',
        options: options,
    }
    const defaultCheckboxes = {
        type: 'checkboxes',
        title: '',
        description: '',
        options: options,
    }
    const defaultLinearScale = {
        type: 'linear_scale',
        title: '',
        description: '',
        optionsLinearScale: {
            startLabel: 'start',
            endLabel: 'end label',
            from: 1,
            to: 4,
        },
    }
    const defaultDateInput = {
        type: 'date_input',
        title: '',
        description: '',
    }
    const defaultTimeInput = {
        type: 'time_input',
        title: '',
        description: '',
    }
    const defaultMultipleChoiceGrid = {
        type: 'multiple_choice_grid',
        title: '',
        description: '',
        options: options,
    }
    const defaultEmailInput = {
        type: 'email_input',
        title: '',
        description: '',
    }
    const defaultNumericInput = {
        type: 'numeric_input',
        title: '',
        description: '',
    }
    const emptyResponse = { sections: [] }

    for (let i = 0; i < formExample.sections.length; i++) {
        let section = []
        for (let j = 0; j < formExample.sections[i].length; j++) {
            section.push(null)
        }
        emptyResponse.sections.push(section)
    }

    //TODO AFTER F1
    //FIGURE IF PASSING THE STATE IS WORTH OR ITF ITS BETTER TO USE GLOBA CONTEXT OR SOMETHING ELSE

    const [response, setResponse] = useState(emptyResponse)

    const updateHeader = (title, description) => {
        const newForm = { ...form }
        newForm.title = title
        newForm.description = description
        setForm(newForm)
    }

    const updateForm = (
        sectionId,
        questionId,
        title,
        description,
        type,
        options,
        optionsLinearScale
    ) => {
        const newForm = { ...form }
        newForm.sections[sectionId][questionId].title = title
        newForm.sections[sectionId][questionId].description = description
        if (options) {
            newForm.sections[sectionId][questionId].options = options
        }
        if (optionsLinearScale) {
            newForm.sections[sectionId][questionId].optionsLinearScale = optionsLinearScale
        }
        if (type) {
            if (type === 'short_answer') {
                newForm.sections[sectionId][questionId] = defaultShortAnswer
            } else if (type === 'paragraph') {
                newForm.sections[sectionId][questionId] = defaultParagraph
            } else if (type === 'multiple_choice') {
                newForm.sections[sectionId][questionId] = defaultMultipleChoice
            } else if (type === 'dropdown') {
                newForm.sections[sectionId][questionId] = defaultDropdown
            } else if (type === 'checkboxes') {
                newForm.sections[sectionId][questionId] = defaultCheckboxes
            } else if (type === 'linear_scale') {
                newForm.sections[sectionId][questionId] = defaultLinearScale
            } else if (type === 'date_input') {
                newForm.sections[sectionId][questionId] = defaultDateInput
            } else if (type === 'time_input') {
                newForm.sections[sectionId][questionId] = defaultTimeInput
            } else if (type === 'multiple_choice_grid') {
                newForm.sections[sectionId][questionId] = defaultMultipleChoiceGrid
            } else if (type === 'email_input') {
                newForm.sections[sectionId][questionId] = defaultEmailInput
            } else if (type === 'numeric_input') {
                newForm.sections[sectionId][questionId] = defaultNumericInput
            }
        }

        console.log(title, description)
        console.log(newForm)
        setForm(newForm)
    }

    const addQuestion = (questionId, del) => {
        console.log(form.sections.length)
        if (del) {
            const newForm = { ...form }
            const arr = newForm.sections[0]
            newForm.sections[0] = [...arr.slice(0, questionId), ...arr.slice(questionId + 1)]
            setForm(newForm)
            return
        }

        const newForm = { ...form }
        const arr = newForm.sections[0]
        newForm.sections[0] = [
            ...arr.slice(0, questionId + 1),
            defaultShortAnswer,
            ...arr.slice(questionId + 1),
        ]
        console.log(newForm)
        setForm(newForm)
    }

    return (
        <main
            className={`relative m-auto flex h-full min-h-screen flex-col items-center p-10 ${inter.className}`}
        >
            <button
                onClick={() => setIsEdit(!isEdit)}
                className='absolute bottom-4 left-4 rounded-md border bg-gray-800 p-2 px-4 text-white'
            >
                Toggle Edit
            </button>
            <Title
                title={form.title}
                description={form.description}
                isEdit={isEdit}
                updateHeader={updateHeader}
            />

            {form.sections.map((section, sectionId) =>
                section.map(
                    (question, questionId) =>
                        //SHORT ANSWER
                        (question.type === 'short_answer' && (
                            <ShortAnswer
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                isEdit={isEdit}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                            />
                        )) ||
                        // PARAGRAPH
                        (question.type === 'paragraph' && (
                            <Paragraph
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                isEdit={isEdit}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                            />
                        )) ||
                        // MULTIPLE CHOICE
                        (question.type === 'multiple_choice' && (
                            <MultipleChoice
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                options={question.options}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // DROPDOWN
                        (question.type === 'dropdown' && (
                            <Dropdown
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                options={question.options}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // CHECKBOXES
                        (question.type === 'checkboxes' && (
                            <Checkboxes
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                options={question.options}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // LINEAR SCALE
                        (question.type === 'linear_scale' && (
                            <LinearScale
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                optionsLinearScale={question.optionsLinearScale}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // DATE INPUT
                        (question.type === 'date_input' && (
                            <DateInput
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // TIME INPUT
                        (question.type === 'time_input' && (
                            <TimeInput
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // MULTIPLE CHOICE GRID
                        (question.type === 'multiple_choice_grid' && (
                            <MultipleChoiceGrid
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // EMAIL INPUT
                        (question.type === 'email_input' && (
                            <EmailInput
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        )) ||
                        // NUMERIC INPUT
                        (question.type === 'numeric_input' && (
                            <NumericInput
                                key={questionId}
                                questionId={questionId}
                                sectionId={sectionId}
                                response={response}
                                setResponse={setResponse}
                                title={question.title}
                                description={question.description}
                                addQuestion={addQuestion}
                                updateForm={updateForm}
                                isEdit={isEdit}
                            />
                        ))
                )
            )}
            <div className=' flex relative w-full max-w-screen-sm justify-end gap-2'>
                <div className='absolute bottom-8 right-0 flex'>
                    {form.sections.map((section, idx) => (
                        <div key={idx} className='text-4xl text-white first:text-black'>
                            -
                        </div>
                    ))}
                </div>
                <button className='rounded-md border bg-white px-8 py-2'>Back</button>
                <button className='rounded-md border bg-white px-8 py-2'>Next</button>
                <button className='rounded-md border bg-gray-800 px-8 py-2 text-white'>
                    Submit
                </button>
            </div>
        </main>
    )
}
