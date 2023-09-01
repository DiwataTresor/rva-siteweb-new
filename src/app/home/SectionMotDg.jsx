import React from 'react'
import dg from "@/assets/dg.jpeg"
import Image from "next/image"
import { poiret,pignon,lora,michroma } from '../style/fonts'
import { bgPrimary,bgPrimaryColor,bgSecondaryColor } from '../style/global'



const SectionMotDg = () => {
  return (
    <div className="flex flex-col pl-30">
        <div><Image src={dg} className="rounded-lg w-[600px] " /></div>
        <div className={`shadow-sm ml-[530px] -mt-[360px] border-0 border-gray-100 ${bgSecondaryColor} h-[340px] font-light rounded-lg w-[600px] p-4 text-[20px] flex flex-col justify-between text-white`} style={michroma.style}>
            <p className="text-center">La Régie des Voies Aériennes se veut d'être une reference de l'aviation</p>
            <p style={poiret.style} className="text-lg text-center">SHUNGU MAHUNGU A, Directeur Général</p>
        </div>
    </div>
  )
}

export default SectionMotDg