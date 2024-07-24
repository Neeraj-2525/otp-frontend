import React, { useEffect, useRef, useState } from 'react'

const OtpField = ({ length = 4 }) => {
    const [otp, setotp] = useState(new Array(length).fill(""));
    const [verified, setVerified] = useState(false)

    const inpRefs = useRef([])

    // console.log(inpRefs)

    useEffect(() => {
        if (inpRefs.current[0]) {
            inpRefs.current[0].focus()
        }
    }, [])



    const handleChange = (i, e) => {
        const val = e.target.value;
        if (isNaN(val)) return;

        const newOtp = [...otp];
        // to allow only one input
        newOtp[i] = val.substring(val.length - 1)
        setotp(newOtp)

        // Move focus to the next input if all characters are filled
        if (i < length - 1 && newOtp[i].length === 1) {
            inpRefs.current[i + 1].focus();
        }

        if (newOtp.join('').length === length) {
            const combOtp = newOtp.join("")
            console.log(combOtp)
            setVerified(newOtp.join('') === '1234');
        } else {
            setVerified(false); // Reset correctness on incomplete OTP
        }



    }

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     const combOtp = otp.join('');
    //     console.log(combOtp)

    //     if(combOtp==='1234'){
    //         setVerified(true);
    //     }else{
    //         setVerified(false);
    //     }
    // }


    const handleClick = (i) => {
        inpRefs.current[i].setSelectionRange(1, 1);
    }

    const handleKeyDown = (i, e) => {
        if (e.key === 'Backspace' && !otp[i] && i > 0 && inpRefs.current[i - 1]) {
            //moving focus to the previous inp field on backspace
            inpRefs.current[i - 1].focus()
        }
    }

    return (
        <div className="flex flex-col mx-[2rem] sm-2:mx-[15rem] md:mx-[8rem]">
            <div className='flex gap-2 justify-between py-10'>
                {
                    otp.map((val, i) => {
                        return (
                            <input
                                type="text"
                                ref={(inp) => (inpRefs.current[i] = inp)}
                                key={i}
                                value={val}
                                onChange={(e) => handleChange(i, e)}
                                onClick={() => handleClick(i)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                className={`otpInput outline-none ${otp.join("").length === 4 ? (verified ? 'outline-[#23CF9B]' : 'outline-[#EB2D5B]') : ""} w-[3.5rem] md:w-[4.5rem] h-[3.5rem] md:h-[4.5rem] rounded-md bg-[#DBE2EF] text-black text-4xl text-center`}
                            />)
                    })
                }
            </div>
            <button className={`${otp.join("").length === 4 ? (verified ? 'bg-[#23CF9B]' : 'bg-[#EB2D5B]') : ""} w-[100%] m-auto text-white text-sm md:text-base py-2 rounded bg-[#112D4E]`}>
                {otp.join("").length === 4 ?
                    (verified ? "Verified" : "Verification Failed") :
                    "Verify Account"}
            </button>
        </div>

    )
}

export default OtpField