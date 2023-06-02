import React from 'react'

const LinearScale = () => {
  return (
    <div className='relative container max-w-screen-sm border mb-6 bg-white p-6 rounded-md'>
      <div className='mb-6'>Multiple choice questions???</div>
      <div className='flex flex-row m-auto justify-between w-8/12'>
        <div className='flex flex-col gap-4 mb-2 '>
          <label className='text-center' htmlFor='scale1'>
            1
          </label>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='scale1'
            value='scale1'
            name='linearscale'
          />
        </div>
        <div className='flex flex-col gap-4 mb-2 '>
          <label className='text-center' htmlFor='scale1'>
            1
          </label>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='scale2'
            value='scale2'
            name='linearscale'
          />
        </div>
        <div className='flex flex-col gap-4 mb-2 '>
          <label className='text-center' htmlFor='scale1'>
            1
          </label>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='scale3'
            value='scale3'
            name='linearscale'
          />
        </div>{' '}
        <div className='flex flex-col gap-4 mb-2 '>
          <label className='text-center' htmlFor='scale1'>
            1
          </label>
          <input
            className='hover:cursor-pointer'
            type='radio'
            id='scale4'
            value='scale4'
            name='linearscale'
          />
        </div>
      </div>
    </div>
  )
}

export default LinearScale
