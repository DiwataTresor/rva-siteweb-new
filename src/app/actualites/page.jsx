"use client"
// import Image from "next/image"
import { titrePrincipal,bgPrimary,bgSecondary, colorSecondary, borderSecondary } from "../style/global";
import { inter, lora, michroma,pignon } from '@/app/style/fonts'
import Link from "next/link"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
  } from "@nextui-org/react";
  import TitrePage from "@/app/components/TitrePage"

const page = () => {
  const data = [
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Installation du DG",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Inauguration Aeroport de Kindu",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Nouveau partenariat RVA-FPI",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Visite comité OACI",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Visite comité OACI",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Visite comité OACI",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
    {
      img: "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
      titre: "Visite comité OACI",
      dt: "01/08/2023",
      contenu:
        "Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae",
    },
  ];
  return (
    <div>
      <TitrePage titre="Toutes nos actualités" />
      <div className="grid grid-cols-3 gap-2 border-0 border-gray-400 pb-5 mb-3 px-[200px] pt-[40px]">
        {data.map((d, i) => {
          return (
            <div className="flex flex-col rounded overflow-hidden bg-gray-0 justify-center items-start flex-wrap w-full mb-5">
              <Image
                src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                className="w-full rounded-tr-md rounded-tl-md"
              />

              <div className="hero-content text-start text-neutral-content px-3 py-2 bg-gradient-to-b from-slate-200 to-white  ">
                <div className="max-w-md">
                  <h1 className="mb-2 text-[15px] font-bold mt-4">{d.titre}</h1>
                  <div className="text-red-600 text-[13px] mb-4">
                    Publié le : {d.dt}
                  </div>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. In deleniti eaque aut
                    repudiandae
                  </p>
                  <p className="text-center">
                    <Link href="/actualites/1"
                      className={`rounded-full px-3 py-1 border ${borderSecondary} ${colorSecondary} hover:bg-blue-800 hover:text-white hover:border-white text-[12px]`}
                      style={{ backgroundColor: `${colorSecondary}` }}
                    >
                      Lire Article
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default page;
