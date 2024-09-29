import React from 'react'
import { CardSpotlight } from '../ui/card-spotlight'
import guntwo from '../../assets/Glitchpop_Operator.png'

const Card = () => {
  return (
    <div className='w-96 h-96 relative'>
      <CardSpotlight className='h-96 flex items-center justify-center flex-col'>
        <div className=' absolute top-0'>
           <h1 className='text-white text-3xl mt-4 font-valo'>Premium </h1>
        </div>
       
        <img src={guntwo} alt="gun one" />
      </CardSpotlight>
    </div>
  )
}

export default Card
