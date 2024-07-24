import React from 'react'
import OtpForm from './components/OtpForm'
import chaiCodeLogo from "./assets/chaicodelogo.png"

const App = () => {  
  return (
    <div className='min-h-[100vh] bg-[#3F72AF]'>
      <h1 className='text-5xl md:text-7xl font-bold drop-shadow-md text-white text-center py-8'>Chai aur Code</h1>
      <OtpForm/>

    <a href="https://masterji.co/" target='_blank'>
    <img  src={chaiCodeLogo} alt="chai aur code logo" className='w-[50px] absolute bottom-0 right-0 mr-5 mb-5 rounded cursor-pointer'/>
    </a>
    
    </div>
  )
}

export default App