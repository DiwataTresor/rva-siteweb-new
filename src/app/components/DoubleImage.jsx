import React from 'react'
import Image from "next/image";
import {bgPrimary,bgSecondary} from "@/app/style/global.jsx"
const DoubleImage=({img1,img2})=>{
  return (
    <div className='flex flex-col rounded-lg border-0 p-2 w-[450px]' style={{borderColor:bgSecondary}}>
        <Image src={img1} className="rounded-lg h-[250px] w-[300px]" />
        <Image src={img2} className=" ml-20 -mt-20 rounded-lg h-[250px] w-[300px]" />
    </div>
  )
}

export default DoubleImage