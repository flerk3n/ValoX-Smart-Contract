import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='flex  items-start justify-around pt-12 h-72 '>
        <div className='flex flex-col items-start  gap-4'>
            <h1 className='text-6xl font-valo'>Volax</h1>
            <p className='font-alata w-2/3 text-xl font-light '>Making the world a better place through constructing elegant hierarchies.</p>
            <div className='flex items-center justify-between w-1/3'>
                <FaInstagram className='text-4xl'/>
                <FaXTwitter className='text-4xl'/>
                <FaGithub className='text-4xl' />
                <FaYoutube className='text-4xl'/>
            </div>
        </div>
        <div className='flex flex-col gap-2 mr-8'>
            <h1 className='font-bold text-xl'>Solutions</h1>
            <p>Marketing</p>
            <p>Analytics</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
        <div className='flex flex-col gap-2 mr-8'>
            <h1 className='font-bold text-xl'>Support</h1>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
            <p>API Status</p>
        </div>
        <div className='flex flex-col gap-2 mr-8'>
            <h1 className='font-bold text-xl'>Company</h1>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Partners</p>
        </div>
        <div className='flex flex-col gap-2 mr-12'>
            <h1 className='font-bold text-xl'>Legal</h1>
            <p>Claim</p>
            <p>Privacy</p>
            <p>Terms</p>
        </div>
      </div>
      <hr className='w-11/12  m-auto'/>
      <h3 className='text-xl font-valo ml-20 mt-4 pb-20'>© 2024 Volax, Inc. All rights reserved.</h3>
    </footer>
  )
}

export default Footer
