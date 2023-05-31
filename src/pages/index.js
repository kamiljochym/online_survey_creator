import Image from 'next/image'
import {Inter} from 'next/font/google'
import ShortAnswer from '@/components/ShortAnswer'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='relative container bg-white p-6 rounded-md'>
        <div className='mb-4'>Question?</div>
        <div className=''>
          <div className='w-2/4 border-b-2  border-gray-300 origin-left transition-all duration-600 focus-within:border-gray-800 focus-within:border-b-2 '>
            <input
              className='bg-red w-full outline-none'
              type='text'
              placeholder='Answer here'
            />
          </div>
        </div>
      </div>
      <ShortAnswer />
    </main>
  )
}
