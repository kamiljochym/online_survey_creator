import Image from 'next/image'
import {Inter} from 'next/font/google'
import ShortAnswer from '@/components/ShortAnswer'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import MultipleChoice from '@/components/MultipleChoice'
import Dropdown from '@/components/Dropdown'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col m-auto items-center p-10 max-w-screen-sm ${inter.className}`}
    >
      <Title />
      <ShortAnswer />
      <Paragraph />
      <MultipleChoice />
      <Dropdown />
      <ShortAnswer />
      <ShortAnswer />
    </main>
  )
}
