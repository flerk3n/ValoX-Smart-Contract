import React from 'react';
import gif from './assets/img.gif';
import { AuroraBackground } from './components/ui/aurora-background';
import Header from './components/Header';
import symbol from './assets/symbol-bg.svg';
import { GlareCard } from './components/ui/glare-card';
import btn from './assets/button-bg.png';
import gunone from './assets/Kuronami_Vandal.png'
import { GlareCardTwo } from './components/ui/glare-card-two';
import { GlareCardThree } from './components/ui/glare-card-three';
import guntwo from './assets/Glitchpop_Operator.png'
import gunthree from './assets/Prime_Axe.png'
import { Link } from "react-router-dom"


const App = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <AuroraBackground />
      <Header />

      {/* Main content with animated gif */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img 
          src={gif} 
          alt="animated characters" 
          className="relative z-10 drop-shadow-2xl max-w-full h-auto"
        />
      </div>

      {/* Background symbol */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <img 
          src={symbol} 
          alt="background symbol" 
          className="relative z-5 drop-shadow-2xl max-w-full h-auto opacity-50" 
        />
      </div>

      {/* Glare Card - Positioned on top */}
      <div className="absolute bottom-80 right-52 transform -translate-x-1/2 z-30 w-52">
          <GlareCard className="flex justify-center p-4 flex-col items-start">
            <img src={gunthree} alt="gun" className='mb-8 pl-4 w-60' />
            <p className='text-white font-ash absolute bottom-0 left-7 w-1/2'>#19 <b className='text-sm mb-2'>Prime Axe</b></p>
          </GlareCard>
      </div>

      {/* Glare Card - Positioned on top */}
      <div className="absolute bottom-24 left-72 transform -translate-x-1/2 z-30 w-52">
        <GlareCardTwo className="flex justify-center p-4 flex-col items-start">
          <img src={gunone} alt="gun" className='mb-4' />
          <p className='text-white font-ash'>#29 <b className='text-md'>Kuronami Vandal</b></p>
        </GlareCardTwo>
      </div>

      <div className="absolute top-52 left-96 transform -translate-x-1/2 z-30 w-52">
        <GlareCardThree className="flex justify-center p-4 flex-col items-start">
          <img src={guntwo} alt="gun" className='mb-4' />
          <p className='text-white font-ash text-xs'>#03 Glitchpop Operator</p>
        </GlareCardThree>
      </div>
      

      {/* Join Now Button - Centered on the page */}
      <div className="absolute inset-0 flex items-center justify-center z-20 mt-12 cursor-pointer">
        <div className="relative flex items-center justify-center w-64">
          <img src={btn} alt="btn" className="absolute inset-0 w-96 h-14 object-cover opacity-50" />
          <Link to='/nftmarketplace' className="relative z-10 text-white text-xl font-bold w-full flex items-center justify-center h-14 font-valo">Join Now</Link>
         
        </div>
      </div>
      
    </div>
  );
};

export default App;
