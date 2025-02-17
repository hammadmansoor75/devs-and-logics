import Image from 'next/image'
import React from 'react'

const SingleService = ({icon, name, description}) => {
  return (
    <div className='bg-white shadow-sm text-black hover:text-white rounded-lg px-5 py-5 hover:bg-lightBlack w-[350px] h-[300px]' >
        <Image src={icon} className='' alt='icon' width={70} height={70} />
        <h2 className='mt-5 text-2xl font-semibold' >{name}</h2>
        <p className=' text-md mt-2' >{description}</p>
    </div>
  )
}

export default SingleService