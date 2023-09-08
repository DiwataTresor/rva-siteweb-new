import React from 'react'
import Image from "next/image"
import logoRva from "./../../../assets/logoRva.png"
import styles from './footer.module.css'
import { bgPrimary,bgSecondary, colorSecondary } from '@/app/style/global'
import { bgSecondaryColor } from '../../style/global';

const soulignement="w-[70px] h-1 bg-blue-300 mb-10";
const titre=`text-[${bgSecondary}]`;


const Footer = () => {
  return (
    <div className="pt-10">
      <div className=' flex flex-row justify-between px-60 gap-10'>
        <div className="border-l-2 border-blue-400 text-blue-400 pl-6">
          <h2 className="text-3xl">Newsletters</h2>
          <p>Restez informé de toutes nos activités, inscrivez-vous maintenant</p>
        </div>
        <div>
            <div className="border  flex flex-row rounded-tl-lg rounded-br-lg flex-wrap overflow-hidden" style={{borderColor:bgSecondary}}>
              <input type="text" className={`w-[300px] outline-none flex-1 text-sm pl-4 ${colorSecondary}`} placeholder="Votre adresse Email"  />
              <button className={`${bgSecondaryColor} h-[40px] text-white px-2`}>S'INSCRIRE</button>
            </div>
        </div>
      </div>
      <div className="pt-5">
          <div className="flex h-[7px] px-[0px]">
              <div className="w-full bg-blue-500">&nbsp;</div>
              <div className="w-full bg-yellow-500">&nbsp;</div>
              <div className="w-full bg-red-500">&nbsp;</div> 
          </div>
          <div className="lg:flex lg:flex-row  min-h-[320px]" style={{backgroundColor:bgPrimary}}>
              <div className="w-1/5 xs:w-5/5 flex flex-col gap-4 text-center justify-center items-center">
                  <Image src={logoRva} width={200} height={80} />
                  <p className="text-center text-white">
                    Regie des Voies Ariennes <br />
                    SA
                  </p>
              </div>
              <div className={styles.colone + " w-1/5 xs:5/5"}>
                <h1 className={titre} style={{color:bgSecondary, fontSize:18, fontWeight:"bold"}}>A Propos de nous</h1>
                <div className={soulignement} style={{backgroundColor:bgSecondary}}>&nbsp;</div>
                <div className="mt-5">
                  <div><a href="#">Qui sommes-nous</a></div>
                  <div><a href="#">Nos services</a></div>
                  <div><a href="#">Nous contacter</a></div>
                  <div><a href="#">General Management</a></div>
                </div>
              </div>
              <div className={styles.colone + " w-1/5 xs:5/5"}>
                <h1 className={titre} style={{color:bgSecondary, fontSize:18, fontWeight:"bold"}}>Nos Aeroports</h1>
                <div className={soulignement} style={{backgroundColor:bgSecondary}}>&nbsp;</div>
                <div className="mt-5">
                  <div><a href="#">Kinshasa</a></div>
                  <div><a href="#">Lubumbashi</a></div>
                  <div><a href="#">Goma</a></div>
                  <div><a href="#">Kisangani</a></div>
                </div>
              </div>
              <div className={styles.colone + " w-1/5 xs:5/5"}>
                <h1 className={titre} style={{color:bgSecondary, fontSize:18, fontWeight:"bold"}}>Liens utiles</h1>
                <div className={soulignement} style={{backgroundColor:bgSecondary}}>&nbsp;</div>
                <div className="mt-5">
                  <div><a href="#">Http://oaci.org</a></div>
                  <div><a href="#">Http://ministeretransport.gouv.cd</a></div>
                </div>
              </div>
              <div className={styles.colone + " w-1/5 xs:5/5"}>
                <h1 className={titre} style={{color:bgSecondary, fontSize:18, fontWeight:"bold"}}>Nos contacts</h1>
                <div className={soulignement} style={{backgroundColor:bgSecondary}}>&nbsp;</div>
                <div className="mt-5">
                  <div>
                    <p>Adresse : </p>
                    <p>Telephone: </p>
                    <p>E-mail: </p>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className="bg-blue-900 text-sm text-center text-white border-t-0 py-3 border-white">copyright © 2023 Régie des Voies Aeriennes | Mentions légales</div>
    </div>
  )
}

export default Footer