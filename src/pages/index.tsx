import { Layout } from "../components/Layout";
import {motion} from 'framer-motion'
import Link from "next/link";

interface CardProps {
  href: string
  imgSrc: string
  layoutID: string
}

export function Card({href, imgSrc, layoutID}: CardProps) {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-500 transition "   >
          <motion.img src={imgSrc} className="w-full h-full" layoutId={layoutID}  />
      </div>
    </Link>
  )
}


export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900 ">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card 
          href="/nextjs"
          imgSrc="/img/nextjs.svg"
          layoutID="nextjs-logo"
        />

      <Card 
          href="/tailwind"
          imgSrc="/img/tailwind.svg"
          layoutID="tailwind-logo"
        />

      <Card 
          href="/framermotion"
          imgSrc="/img/framermotion.svg"
          layoutID="framermotion-logo"
        />

      </div>
    </div>
  )
}
