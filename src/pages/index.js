import Image from 'next/image'
import {Inter} from 'next/font/google'
import ShortAnswer from '@/components/ShortAnswer'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import MultipleChoice from '@/components/MultipleChoice'
import Dropdown from '@/components/Dropdown'
import Checkboxes from '@/components/Checkboxes'
import LinearScale from '@/components/LinearScale'
import Date from '@/components/Date'
import DateInput from '@/components/Date'
import TimeInput from '@/components/TimeInput'
import MultipleChoiceGrid from '@/components/MultipleChoiceGrid'
import EmailInput from '@/components/EmailInput'
import NumericInput from '@/components/NumericInput'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col m-auto items-center p-10 ${inter.className}`}
    >
      <Title />
      <ShortAnswer />
      <Paragraph />
      <MultipleChoice />
      <Dropdown />
      <Checkboxes />
      <LinearScale />
      <DateInput />
      <TimeInput />
      <MultipleChoiceGrid />
      <EmailInput />
      <NumericInput />
      <ShortAnswer />
      <ShortAnswer />
    </main>
  )
}
