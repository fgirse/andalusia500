'use client'

import Image from "next/image"
import redRoofs from "../../public/assets/images/images.webp";
//import Typed from 'react-typed'
import Link from "next/link"


const Hero = () => {
  return (
    
    <div className="h-96 w-screen bg-[#ecf0f3] relative">
        <Image
   src={redRoofs}
    alt="redRoofs"
    objectFit="cover"
    quality={100}
    priority
    className="absolute w-full h-[70vh]"
    />
    {/* Main Text */}
    <div>
<h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
    A software {" "}
    <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
        agency
    </span>
 </h1>

 <div className="items-center mx-auto justify-center text-center pt-16 z-20">
 <Link href="/pricing">
    <button className="bg-black text-white text-2xl px-10 py-5 rounded-lg shadow-xl shadow-black/40 hover:bg-black/70 cursor-pointer  ">
        See plans
    </button>
    </Link>
    
 </div>
    </div>
    <div>
  
    </div>
    </div>
)
}


export default Hero