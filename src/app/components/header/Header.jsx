"use client"
import logoRva from "./../../../assets/logoRva.png";
import Menu from "./Menu"
import Image from "next/image"
import { inter, michroma, poiret } from '../../style/fonts'
import { bgPrimary } from "@/app/style/global";


const Header=()=>{
   if(window.innerWidth<770)
   {
    alert("mobile")
   }
    return (
       
<nav className="bg-blue-900 border-gray-200 shadow-md w-screen" style={{backgroundColor:bgPrimary}}>
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 shadow-md">
        <a href="#" className="flex items-center">
            <Image src={logoRva} className=" mr-3" width={130} height={120} alt="logo" />
            {/* <span className={"self-center text-2xl text-[#fb6a09]   whitespace-nowrap dark:text-yellow-300 "} style={inter.style}>Régie des Voies Aeriennes</span> */}
            <span className={"self-center text-xl text-orange-300 font-bold  whitespace-nowrap dark:text-yellow-300 "} style={michroma.style}>Régie des Voies Aériennes</span>
        </a>
        <div className="flex items-center md:order-2">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Se connecter
            </a>
            <a href="#" className="flex flex-row gap-1 text-white hover:text-[#fb6a09] dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                <span>
                Fr
                </span>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M6 9l6 6 6-6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
            <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <Menu />
    </div>
</nav>

    )
}
export default Header