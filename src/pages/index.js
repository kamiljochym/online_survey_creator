import Image from 'next/image'
import {Inter} from 'next/font/google'
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
import {useState} from 'react'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const options = [
    'Option A',
    'Option B',
    'Option C --openssl-legacy-provider start',
    'Option D',
  ]

  const defaultForm = {
    title: 'Form title',
    description: '',
    sections: [[{type: 'short_answer', title: 'Question', description: ''}]],
  }

  const [form, setForm] = useState(defaultForm)

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
  const formExample = {
    title: 'Online Survey',
    description: 'Description of online survey',
    sections: [
      [
        {
          type: 'short_answer',
          title: 'Short answer question',
          description: 'short answer desc',
        },
        {
          type: 'paragraph',
          title: 'paragraph answer question four',
          description: ' short answer desc',
        },
        {
          type: 'multiple_choice',
          title: 'multiple answer question four',
          description: ' multiple answer desc',
          options: options,
        },
        {
          type: 'dropdown',
          title: 'dropdown answer question four',
          description: ' dropdown answer desc',
          options: options,
        },
        {
          type: 'checkboxes',
          title: 'checkbox answer question four',
          description: ' checkboxes answer desc',
          options: options,
        },
        {
          type: 'linear_scale',
          title: 'linear answer question four',
          description: ' linear answer desc',
          optionsLinearScale: {
            startLabel: 'start',
            endLabel: 'end label',
            from: 1,
            to: 4,
          },
        },
        {
          type: 'date_input',
          title: 'date answer question four',
          description: ' date answer desc',
        },
        {
          type: 'time_input',
          title: 'time answer question four',
          description: 'time answer desc',
        },
        {
          type: 'multiple_choice_grid',
          title: 'multiple grid answer question four',
          description: ' multiple grid answer desc',
          options: options,
        },
        {
          type: 'email_input',
          title: 'email answer question four',
          description: ' email answer desc',
        },
        {
          type: 'numeric_input',
          title: 'numeric answer question four',
          description: ' numeric answer desc',
        },
      ],
      [],
      [],
    ],
  }
  const emptyResponse = {sections: []}

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

  const updateForm = (
    sectionId,
    questionId,
    title,
    description,
    type,
    options,
    optionsLinearScale
  ) => {
    const newForm = {...form}
    newForm.sections[sectionId][questionId].title = title
    newForm.sections[sectionId][questionId].description = description
    if (options) {
      newForm.sections[sectionId][questionId].options = options
    }
    if (optionsLinearScale) {
      newForm.sections[sectionId][questionId].optionsLinearScale = optionsLinearScale
    }
    if (type) {
      newForm.sections[sectionId][questionId].type = type
    }

    console.log(title, description)
    console.log(newForm)
    setForm(newForm)
  }

  const addQuestion = (questionId) => {
    const newForm = {...form}
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
      className={`m-auto flex min-h-screen flex-col items-center p-10 ${inter.className}`}
    >
      <Title
        title={formExample.title}
        description={
          formExample.description + ' test response ' + response.sections[0][7]
        }
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
                isEdit={false}
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
                title={question.title}
                description={question.description}
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
                options={options}
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
              />
            ))
        )
      )}
      {/* 
      <ShortAnswer
        title={'Short answer'}
        description={
          'Test description but its quite long to test what happens if the line is long and how the di woudl react t0 the line being wquite long typing speed 9999'
        }
      />
      <Paragraph
        title={'Paragraph answer'}
        description={
          'Test description but its quite long to test what happens if the line is long and how the di woudl react t0 the line being wquite long typing speed 9999'
        }
      />
      <MultipleChoice
        title={'Multiple choice question'}
        description={'This is a multiple choice descriptions'}
        options={options}
      />

      <MultipleChoice
        title={'Multiple choice question'}
        description={'This is a multiple choice descriptions'}
        options={options}
      />
      <Dropdown
        title={'Dropdown question'}
        description={'this is an optional descriptions'}
        options={options}
      />
      <Checkboxes
        title={'Checkbox question'}
        description={'Checkbox optuonal desc'}
        options={options}
      />
      <LinearScale
        title={'Linear scale question'}
        description={'optional desc'}
        options={options}
      />

      <LinearScale
        title={'Linear scale question'}
        description={'optional desc'}
        options={options}
      />
      <DateInput title={'Date'} description={'optional desc'} />

      <TimeInput title={'time question'} description={'optional desc'} />

      <MultipleChoiceGrid />
      <EmailInput title={'email question'} />
      <NumericInput title={'numeric'} /> */}
    </main>
  )
}
