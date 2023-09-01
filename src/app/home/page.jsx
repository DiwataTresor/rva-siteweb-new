"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "@/app/globals.css";
import styles2 from "./home.module.css";
import Image from "next/image";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionActu from "./SectionActu";
import SectionVols from "./SectionVols";
import SectionService from "./SectionService";
import nouvelleTour from "@/assets/nouvelleTour.jpg";
import modulaire from "@/assets/modulaire.jpeg";
import modulaire2 from "@/assets/modulaire2.jpeg";
import avion from "@/assets/avion.jpeg";
import logoRva from "@/assets/logoRva.png";
import { inter, lora, poiret, pignon, michroma } from "../style/fonts";
import { bgPrimary, bgSecondary, colorSecondary, colorPrimary,colorThird } from "../style/global";
import SectionMotBienvenu from "./SectionMotBienvenu";
import SectionMotDg from "./SectionMotDg";

const textSecondary = `text-[${bgSecondary}]`;

function _Home() {
  return (
    <div>
      <div className="h-[400px] bg-slate-100 mb-3">
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
            <div className={styles2.slide}  style={{backgroundImage:'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")',backgroundSize:"cover"}}>
              <div className="flex-col w-full text-center justify-center items-center flex-1" style={michroma.style}>
                <div
                  className={`text-[40px] ${colorThird}`}
                  style={lora.style}
                >
                  Bienvenue à la RVA
                </div>
                <Image
                  src={logoRva}
                  width={330}
                  height={200}
                  className="m-auto"
                  alt="logo"
                />
                <div className={`text-[60px]  text-2xl mt-6 ${colorPrimary}`}>
                  Régie des Voies Aériennes
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles2.slide}>
              <div className="flex flex-row gap-4">
                {/* <Image src={modulaire} className="h-[320px] -skew-x-12 flex-1 w-full " alt="logo" />
            <Image src={modulaire2} className="h-[320px] -skew-x-12 flex-1 w-full" alt="logo" />
            <Image src={nouvelleTour} className="h-[320px] -skew-x-12 flex-1 w-full" alt="logo" /> */}
                <Image
                  src={avion}
                  className="h-[320px] rounded-lg flex-1 w-1/3 "
                  alt="logo"
                />
                <Image
                  src={modulaire2}
                  className="h-[320px] rounded-lg flex-1 w-1/3 sm"
                  alt="logo"
                />
                <Image
                  src={nouvelleTour}
                  className="h-[320px] rounded-lg flex-1 w-1/3 md:3/3"
                  alt="logo"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles2.slide} style={{backgroundImage:'url("https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop")',backgroundSize:"cover"}}>
              <h2
                style={michroma.style}
                className={`text-center w-full text-[30px] ${colorPrimary}`}
              >
                Pour la sécurité de notre espace aérienne, faisons confiance à la R.V.A
              </h2>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide><div className={styles2.slide}>Slide 4</div></SwiperSlide> */}
        </Swiper>
      </div>
      <div>
        <div className="bg-slate-200 py-3">
          <div className="px-[200px]">
            <SectionActu />
          </div>
        </div>
        <div
          className={`${bgPrimary}`}
          style={{ backgroundColor: bgPrimary }}
        >
          <div className="px-[200px]">
            <SectionMotBienvenu />
          </div>
        </div>
        <div className={` bg-slate-100 py-3`}>
          <div className="px-[200px] py-5">
            <SectionMotDg />
          </div>
        </div>
        <div className={` bg-slate-200`}>
          <div className="px-[200px] py-5">
            <SectionVols />
          </div>
        </div>
        
        {/* <SectionActu /> */}
        {/* <SectionService /> */}
        {/* <SectionVols /> */}
      </div>
    </div>
  );
}

export default _Home;
