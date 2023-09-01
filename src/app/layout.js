import './globals.css'
import { Inter,Poppins, Poiret_One} from 'next/font/google'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import {isMobile} from "@/app/fcts/helper"

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight:"300" })
const poiret = Poiret_One({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Accueil - Portail de Régie des Voies Aèriennes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      
        <Header />
        <div className="w-full">
        {children}
        </div>
       <Footer />
      </body>
     
    </html>
  )
}
