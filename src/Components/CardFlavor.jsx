import React from 'react'

const CardFlavor = (props) => {
  return (
    <div className='w-1/2'>
        <div className='w-[330px] space-y-5'>
                    <div className='rounded-[2em] w-[275px] grid items-end h-[271px] bg-primary-10 m-auto'>
                        <img src={props.coverImg} alt="" className='grid justify-end'/>
                    </div>
                    <p className='text-center text-secondary-10 p2'>{props.title}</p>
                    <p className='text-center text-white-30 p2'>{props.text}</p>
                </div>
    </div>
  )
}

export default CardFlavor