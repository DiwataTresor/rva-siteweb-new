"use client"
import Image from 'next/image'
import _Home from "@/app/home/_Home";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
    <main>
       <_Home />
    </main>
    </NextUIProvider>
  )
}
