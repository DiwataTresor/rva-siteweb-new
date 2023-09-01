"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "@/app/globals.css";
import styles2 from "./home.module.css"
import Image from "next/image"

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionActu from "./SectionActu"
import SectionVols from "./SectionVols"
import SectionService from "./SectionService";
import nouvelleTour from "@/assets/nouvelleTour.jpg"
import modulaire from "@/assets/modulaire.jpeg"
import modulaire2 from "@/assets/modulaire2.jpeg"
import logoRva from "@/assets/logoRva.png"
import { inter, lora, poiret,pignon, michroma } from '../style/fonts'
import { bgPrimary,bgSecondary,colorSecondary } from '../style/global';

const textSecondary=`text-[${bgSecondary}]`;

function _Home() {
  return (
    <div>
      <div className="h-[400px] bg-blue-700/20 mb-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
      
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
          <div className={styles2.slide} style={michroma.style}>
            <div className="flex-col w-full text-center justify-center items-center flex-1">
              <div className={`text-[40px] ${colorSecondary}`} style={lora.style}>Bienvenue à la RVA</div>
             <Image src={logoRva} width={330} height={200} className="m-auto" alt="logo" />
              <div className="text-[60px]  text-2xl mt-6">Régie des Voies Aeriennes</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className={styles2.slide}>
          <div className="flex flex-row gap-4">
            {/* <Image src={modulaire} className="h-[320px] -skew-x-12 flex-1 w-full " alt="logo" />
            <Image src={modulaire2} className="h-[320px] -skew-x-12 flex-1 w-full" alt="logo" />
            <Image src={nouvelleTour} className="h-[320px] -skew-x-12 flex-1 w-full" alt="logo" /> */}
            <Image src={modulaire} className="h-[320px] rounded-lg flex-1 w-full " alt="logo" />
            <Image src={modulaire2} className="h-[320px] rounded-lg flex-1 w-full" alt="logo" />
            <Image src={nouvelleTour} className="h-[320px] rounded-lg flex-1 w-full" alt="logo" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles2.slide}>
            <h2 style={pignon.style} className="text-center w-full text-[70px] ">Bienvenue chez nous</h2>
          </div>
        </SwiperSlide>
        
        {/* <SwiperSlide><div className={styles2.slide}>Slide 4</div></SwiperSlide> */}
      </Swiper>
    </div>
    <div className="">
      {/* <SectionActu /> */}
      {/* <SectionService /> */}
      {/* <SectionVols /> */}
    </div>
    </div>
  )
}

export default _Home