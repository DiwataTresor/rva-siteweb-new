import React from 'react'
import { lora,pignon,michroma,inter } from '../style/fonts'
import { titrePrincipal } from '../style/global'
import nouvelleTour  from '@/assets/nouvelleTour.jpg';
import Image from "next/image"
import Link from "next/link"
import DoubleImage from '../components/DoubleImage';
import {bgSecondary} from "@/app/style/global.jsx"
import avion  from '@/assets/avion.jpeg';


function SectionMotBienvenu() {
  return (
    <div className="py-4">
        <p className={`${titrePrincipal} text-center flex justify-center`} style={michroma.style}>
            <svg width="94px" height="54px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={bgSecondary}><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke={bgSecondary} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke={bgSecondary} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span style={michroma.style} className="">Découvrir la R.V.A</span>
        </p>
        <div className="flex flex-row justify-center gap-[130px] text-white text-3xl pb-8 items-center text-center">
            <p>
                +1500 <br />
                Clients
            </p>
            <p>
                +54 <br />
                Aeroports
            </p>
            <p>
                +10000 <br />
                Vols/an
            </p>
            <p className=''>
                +300 <br />
                Projets
            </p>
        </div>
        
        <div className="flex gap-10 mt-10 text-white">
            <div className="w-2/3 items-center align-center text-center"><DoubleImage img1={nouvelleTour} img2={avion} /></div>
            {/* <Image src={nouvelleTour} className="w-96 h-96 rounded-md animate-pulse" /> */}
            <div className="w-3/3">
                <p className={` font-bold text-xl`} style={michroma.style}>Nous sommes le regulateur de l'aviation</p>
                <p className="mt-7" style={inter.style}>
                    Sed a libero. Ut id nisl quis enim dignissim sagittis. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus.

                    In auctor lobortis lacus. Vivamus in erat ut urna cursus vestibulum. Praesent egestas neque eu enim. In ut quam vitae odio lacinia tincidunt.

                    Fusce vulputate eleifend sapien. Nunc nonummy metus. Aliquam erat volutpat. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula.
                </p>
                <p className={`mt-10`}>
                    Découvrez : <Link href="#" className='text-blue-400 hover:decoration-underline mr-2 ml-2'>Notre Mission</Link> 
                    | 
                    <Link href="#" className='text-blue-400 hover:decoration-underline mr-2 ml-2'>Notre histoire</Link>
                    | 
                    <Link href="/aeroports" className='text-blue-400 hover:decoration-underline mr-2 ml-2'>Projets</Link>
                    | 
                    <Link href="/aeroports" className='text-blue-400 hover:decoration-underline mr-2 ml-2'>Nos aeroports</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionMotBienvenu