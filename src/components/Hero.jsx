import React from 'react'
import akshat from '/images/akshat.png'

const Hero = () => {
  return (
    <div className='block'>
        <div className="flex w-full h-[775px] justify-start p-15 gap-2 pb-0 pt-20">
        <div className="w-[50%] h-[90%] flex flex-col justify-center items-center">
            <div className="w-[90%] h-[80%] flex flex-col justify-end-safe items-basline p-[15px]">
                <span className="text-[18px] font-semibold text-sky-600 ml-5">
                    HI THERE 👋 I'M
                </span>
                <span className="text-[80px] font-bold text-sky-300 ml-5">
                    AKSHAT<br />SRIVASTAVA
                </span>
                <span className="text-3xl font-bold text-[#DF73FF] ml-5 mb-2">
                    FRONTEND WEB DEVELOPER
                </span>
                <span className="text-[18px] font-medium text-sky-900 ml-5 mb-5">
                    I'm a front end web developer with backend skills,<br />based in INDIA
                </span>
                <button className="h-[50px] p-[15px] bg-[#DF73FF] text-[15px] font-bold hover:opacity-75 text-white rounded-[50px] cursor-pointer w-[200px] ml-[100px]"> 
                    HIRE
                </button>
            </div>
        </div>
        <div className="w-[40%] h-[90%] flex justify-start items-center"> 
            <span className="h-[95%] w-[90%] flex justify-start items-baseline">
                <img src={akshat} alt="akshat" className="h-[100%] w-[100%]" />
            </span>
        </div>
    </div> 
    </div>
  )
}

export default Hero;