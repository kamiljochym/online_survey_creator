import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='container relative mb-6 max-w-screen-sm rounded-md border bg-white p-6'>
      <div className='mb-6 text-4xl'>{title}</div>
      <div className=''>{description}</div>
    </div>
  )
}

export default Title
