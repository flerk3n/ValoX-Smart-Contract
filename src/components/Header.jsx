import React from 'react'
import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    <div className="absolute top-[8%] left-1/2 transform gap-5  -translate-x-1/2 -translate-y-1/2 z-30  flex items-center w-full ">
       
        <button className="inline-flex h-12 animate-shimmer ml-20 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Discover
        </button>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Inventory
        </button>
        
        <h1 className='text-white text-large font-valo mx-auto pr-44 mt-24 pl-44'>ValoX</h1>
        <button className="p-[3px] relative z-30">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg z-30" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-red-600 z-30">
            Connect Wallet
          </div>
        </button>
        <div className='h-14 w-14 bg-white rounded-full	mr-12 flex items-center justify-center'>
         <CgProfile className='text-6xl'/>
        </div>
        
    </div>
  )
}

export default Header
       
  
        
      


