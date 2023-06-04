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

  const [form, setForm] = useState([])

  const ShortAnswerForm = {
    title: 'Your title here',
    description: 'Optional Description here',
  }

  const ParagraphAnswerForm = {
    title: 'Your title here',
    description: 'Optional Description here',
  }
  const formExample = {
    title: 'Online Survey',
    description: 'Description of online survey',
    sections: [
      [
        {
          type: 'short_answer',
          title: 'Short answer question',
          description: ' short answer desc',
        },
        {
          type: 'short_answer',
          title: 'Short answer question 2',
          description: ' short answer desc',
        },
        {
          type: 'short_answer',
          title: 'Short answer question 3',
          description: ' short answer desc',
        },
        {
          type: 'paragraph',
          title: 'paragraph answer question four',
          description: ' short answer desc',
        },
      ],
      [],
      [],
    ],
  }
  return (
    <main
      className={`m-auto flex min-h-screen flex-col items-center p-10 ${inter.className}`}
    >
      <Title title={formExample.title} description={formExample.description} />

      {formExample.sections.map((section, idx) =>
        section.map(
          (question, idx) =>
            //SHORT ANSWER
            (question.type === 'short_answer' && (
              <ShortAnswer
                key={idx}
                title={question.title}
                description={question.description}
              />
            )) ||
            // PARAGRAPH
            (question.type === 'paragraph' && (
              <Paragraph
                key={idx}
                title={question.title}
                description={question.description}
              />
            )) ||
            // MULTIPLE CHOICE
            (question.type === 'multiple_choice' && (
              <MultipleChoice
                key={idx}
                title={question.title}
                description={question.description}
                options={question.options}
              />
            )) ||
            // DROPDOWN
            (question.type === 'dropdown' && (
              <Dropdown
                key={idx}
                title={question.title}
                description={question.description}
                options={question.options}
              />
            )) ||
            // CHECKBOXES
            (question.type === 'checkboxes' && (
              <Checkboxes
                key={idx}
                title={question.title}
                description={question.description}
                options={options}
              />
            )) ||
            // LINEAR SCALE
            (question.type === 'linear_scale' && (
              <LinearScale
                key={idx}
                title={question.title}
                description={question.description}
                optionsLinearScale={question.optionsLinearScale}
              />
            )) ||
            // DATE INPUT
            (question.type === 'date_input' && (
              <DateInput
                key={idx}
                title={question.title}
                description={question.description}
              />
            )) ||
            // TIME INPUT
            (question.type === 'time_input' && (
              <TimeInput
                key={idx}
                title={question.title}
                description={question.description}
              />
            )) ||
            // MULTIPLE CHOICE GRID
            (question.type === 'multiple_choice_grid' && (
              <MultipleChoiceGrid
                key={idx}
                title={question.title}
                description={question.description}
              />
            )) ||
            // EMAIL INPUT
            (question.type === 'email_input' && (
              <EmailInput
                key={idx}
                title={question.title}
                description={question.description}
              />
            )) ||
            // NUMERIC INPUT
            (question.type === 'numeric_input' && (
              <NumericInput
                key={idx}
                title={question.title}
                description={question.description}
              />
            ))
        )
      )}

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
      <NumericInput title={'numeric'} />
    </main>
  )
}
