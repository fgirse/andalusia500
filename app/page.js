

import { archidaught, lontoutline } from '../utils/fonts';
import Head from "next/head";
import { benefitOne, benefitTwo } from "./components/data";
import Image from "next/image"
import { Benefits, Container, CTA, Dashboard, DarkSwitch, Data, Faq, Feed, Form, Hero, Hero2,Nav, Navbar, PopupWidget, Team, SectionTitle,Testimonials,Timeline ,Video, Features, } from "../app/components";
import { getServerSession } from 'next-auth'

import Hero3 from'../public/assets/images/Example01.png'
import User from './components/user'

export default function Home() {
  return (
<main className='w-[100vw]'>
   <section className="bg-stone-700 bg-[url('/assets/images/redRoofs_sm.png')] bg-[length:100%_100vh] bg-no-repeat flex min-h-screen flex-col items-center justify-between  bg-[url('/assets/images/werb)] lg:bg-[length:100%_95vh] p-24">
        <div className={lontoutline.className}>
        <h1 className="mt-60 bg-black/20 px-3 rounded-2xl text-7xl sm:text-8xl font-bold tracking-tight lg:px-7 lg:py-1

        
        lg:transform lg:translate-x-72 -translate-y-[50vh] lg:text-[6rem] z-20">
    Wohntraum {" "}
    <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
        Andalusia
    </span>
 </h1>
<div className='lg:mt-32'> </div>
 </div>  
 <Feed/>
 </section>     
 <section id="section_Hero" className='lg:-mt-40 w-swa0creen h-screen bg-stone-700'>
   
    <Hero />
   
    <Image src="/assets/images/LogoWA.svg" height="80" width="120" alt="Logo WA" className='curser-pointer mt-5 mb-5 w-32 lg:w-60 mx-auto lg:mt-20 border-2 p-3 border-yellow-500 rounded-xl'/>
    <div className={archidaught.className}>
    
          <SectionTitle
        title=" Warum wir Ihnen Ihre Wohnträume in Andalusien erfüllen können!!!">
        Wir die Wohntraum Andalusia SI erheben an uns die höchsten Qualitätsansprüche Ihnen als unsere Kunden, den Traum einer Ihnen gerecht werdenden Immoblie zu verwirklichen. Transparenz & Vertrauen sind dabei die wichtigsten Meilensteine unseres Handelns. 
      </SectionTitle>
      <div className='mt-5 mb-12 flex flex-col justify-center items-center'>
        <Image src={Hero3} alt="Beispielphoto" className='border-2' /></div>
      </div>
      </section>
      <section id="section_Features" className='mb-[3vh] w-[100vw] bg-stone-600'>
        <div className={archidaught.className}>
        <SectionTitle
        pretitle="Wir über uns"
        title="Die Wohntraum Andalusia SI">
                    Die Wohntraum Andalusia SI ist eine im spanischen Handelsregister eingetagene SI (vergleichbar der GmbH in Deutschland und der Schweiz). Wir sind seit vielen Jahren im lokalen Immobilienmarkt Andalusiens tätig und sind in der Aquisition von Immobilien seit über 10 Jahren erfolgreich..
 
      </SectionTitle>
       </div>
       </section> 
     
       <section id="section_Video"className='w-[100vw]bg-stone-400'>
       <SectionTitle
        pretitle="Videodemonstration"
        title="Demonstrationsbeispiel einer Musterimmobilie">
        In dieser Videodemonstration zeigen wir ein Musterbeispiel einer Immobilie, welche für den Eigner durch die Wohnraum Andalusia GmbH verwirklicht erfolgreich vermittelt wurde 
      </SectionTitle>
      <Video />

       </section>
       <section id="section_Testimonial" className=''>
       <SectionTitle
        pretitle="Testimonials"
        title="Das sagen unsere Kunden">
        Lesen Sie selbst warum unsere Kunden mit ihren Wohnträumen sich vertrauensvoll an uns wenden
      </SectionTitle>
      <Testimonials />
       </section>
       <section id="section_FAQ" className=''>
       <SectionTitle  pretitle="FAQ" title="Die wichtigsten und die am Häufigsten gestellten Fragen">
        Transparenz ist die oberste Devise der Wohntraum Andalusia GmbH. Nur durch eine  vertrauensvolle Verbindung ist ein gemeisamer erfolgreicher Geschäftsabschluss möglich.
      </SectionTitle>
      <Faq />  
   
      
       </section>

   

       <section id="section_Team" className=''>
       <Team />
       </section>
    
       <PopupWidget />
      
   
        
         </main>
  )
}

{/*
 <section id="section_Info1" className="bg-stone-700">
        <SectionTitle>

        <Benefits data={benefitOne} />

          
        </SectionTitle>
                           </section>
       
       <section id="section_Info2" className="">               
               <Benefits imgPos="right" data={benefitTwo} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
       </section>

*/}