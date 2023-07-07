import React from 'react'
import {  AiFillCheckCircle, AiFillControl, AiFillPhone } from 'react-icons/ai'

const phone = {icon:AiFillPhone}

const InfoBar = () => {
  return (
    <div className='bg-stone-600 w-[100vw] flex justify-start items-start'>
          <div className='px-[3vw] h-8 bg-stone-600 text-stone-200'><phone.icon className="inline px-1 text-red-300 w-6 h-6" aria-hidden="true" />+34 555 888</div>
          <div className='px-[3vw] h-8 bg-stone-600 text-stone-200'><phone.icon className="inline px-1 text-red-300 w-6 h-6" aria-hidden="true" />wohntraum.andalusia@gmx.com</div>
    </div>
  
  )
}

export default InfoBar