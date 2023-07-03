import Image from 'next/image'
import { archidaught, lontoutline } from '../utils/fonts';
export default function Home() {
  return (
   <main className="bg-hero w-[100vw] bg-[url('/assets/images/images.webp')] bg-no-repeat flex min-h-screen flex-col items-center justify-between p-24">
        <div className={lontoutline.className}>
        <h1 className="text-left bg-white/40 text-5xl sm:text-8xl font-bold tracking-tight lg:-mt-[5vh] lg:text-[7rem] z-20">
    Wohntraum {" "}
    <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
        Andalusia
    </span>
 </h1>
 </div>  
      
        
        
         </main>
  )
}
