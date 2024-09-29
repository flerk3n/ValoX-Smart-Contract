import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'
import { TabsDemo } from './components/TabsDemo.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NftMarketplace from './components/NftMarketplace.jsx'


const Final = () => {
  return (
    <>
      <App />
      <div className='h-16 w-1/2  relative bottom-12 bg-white z-20'></div>
      <div class="w-0 h-0 border-b-[90px] border-b-transparent border-l-[90px] border-white relative m-auto  bottom-[94px] z-20 rotate-45"></div>

      <TabsDemo />
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Final />} />
      <Route path="/nftmarketplace" element={<NftMarketplace />} />
    </Routes>
  </BrowserRouter>,
)
