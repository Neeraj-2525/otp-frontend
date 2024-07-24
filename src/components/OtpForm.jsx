import React from 'react'
import OtpField from './OtpField'

const OtpForm = () => {
  return (
    <div className=' bg-[#F9F7F7] mx-[1rem] md:w-[40rem] rounded-lg md:m-auto'>
      <h1 className='text-3xl md:text-4xl text-center font-semibold pt-5'>Mobile Phone Verification</h1>
      <p className='text-center text-[#BFBFBF] text-sm px-5 md:text-lg pt-3'>Enter the 4-digit verification code that was sent to your phone number</p>

      <OtpField length={4}/>

      <div className="resendLine text-center text-sm md:text-lg pt-5 pb-10 text-[#BFBFBF]">Didn't receive code? <span className='text-[#112D4E] cursor-pointer hover:underline'>Resend</span></div>
    </div>
  )
}

export default OtpForm