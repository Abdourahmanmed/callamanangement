import React from 'react'

const BoxInfo = ({text , nombre}) => {
  return (
    <div className='w-full h-[100px] bg-white border group p-4 shadow-lg hover:bg-blue transition-all duration-500'>
        <h1 className='text-center  text-blue group-hover:text-white'>{text}</h1>
        <p className='text-center mt-4 text-blue font-semibold group-hover:text-white'>{nombre}</p>
    </div>
  )
}

export default BoxInfo