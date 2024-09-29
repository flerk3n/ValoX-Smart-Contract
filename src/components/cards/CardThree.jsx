import React from 'react'
import { CardSpotlight } from '../ui/card-spotlight'
import gunthree from '../../assets/Prime_Axe.png'

const Card = () => {
  return (
    <div className='w-96 h-96 relative'>
      <CardSpotlight className='h-96 flex items-center justify-center flex-col'>
        <div className=' absolute top-0'>
           <h1 className='text-white text-3xl mt-4 font-valo'>Deluxe</h1>
        </div>
       
        <img src={gunthree} alt="gun one" />
      </CardSpotlight>
    </div>
  )
}

export default Card
