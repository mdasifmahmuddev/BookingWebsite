import React from 'react'

export const Hero = () => {
  return (
    <div className='grid pt-8 grid-cols-3  gap-3  '>

      <div  className=' bg-amber-400 flex-col    rounded-2xl flex items-center justify-center text-4xl text-white  h-[200px] w-auto'>
        <h1>Pending </h1> 
        <span>0</span>
      </div>
      <div className=' bg-blue-700  flex-col rounded-2xl flex items-center justify-center text-4xl text-white h-[200px] w-auto]'>
         <h1>Submit</h1>
         <span>1</span>
      </div>

      <div className=' bg-red-700  flex-col  rounded-2xl flex items-center justify-center text-4xl text-white h-[200px] w-auto'>
        <h1>Reviewd</h1>
        <span>2</span>
      </div>





    </div>
  )
}
