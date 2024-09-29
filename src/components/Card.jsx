import React from 'react'
import { CardSpotlight } from './ui/card-spotlight'
import gunone from '../assets/Kuronami_Vandal.png'

const Card = () => {
  return (
    <div className='w-96 h-96 relative'>
      <CardSpotlight className='h-96 flex items-center justify-center flex-col'>
        <div className='border-2 absolute top-0'>
           <h1 className='text-white text-2xl'>Hello Mr </h1>
        </div>
       
        <img src={gunone} alt="gun one" />
      </CardSpotlight>
    </div>
  )
}

export default Card
