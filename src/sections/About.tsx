'use client'

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CartHeader } from "@/components/CartHeader";
import { ToolBoxItem } from "@/components/ToolBoxItem";
import {motion} from "framer-motion"
import { useRef } from "react";
const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "GithubIcon",
    iconType: GithubIcon,
  },
]


const hobbies = [
  {
    title: "Photography",
    emoji: '📸',
    left: '5%',
    top: '5%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '50%',
    top: '5%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '10%',
    top: '35%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '35%',
    top: '40%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '70%',
    top: '45%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '5%',
    top: '65%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '45%',
    top: '70%'
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader eyeBrow="About Me" title="A Glimpse Into My World" desc="Learn more about whi I am, what I do, What inspires me."/>
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 sm:mb-10 lg:col-span-1">
         <CartHeader title="My Reads" desc="Explore the books shaping my prespective."/>
            
            <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt="book image" />
          </div>
            </Card>
            

          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CartHeader title="My Toolbox" desc="Explore the technologies and tools I use to craft Expeptional digital experiences." className=""/>

            <ToolBoxItem toolBoxItems={toolBoxItems} className="" itemWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolBoxItem toolBoxItems={toolBoxItems}
              itemWrapperClassName="animate-move-right [animation-duration:20s]"
              className="mt-6" />
        </Card>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
            

            <CartHeader className="px-6 py-6" title="Beyond the code" desc="Explore my interests and hobbies beyond the digital real."/>


          <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map((item) => (
              <motion.div key={item.title} style={{
                left: item.left,
                top: item.top
              }} className="absolute items-center inline-flex  gap-2  px-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
              drag
              dragConstraints={constraintRef}
              >
                <span  className=" font-medium text-gray-950">{item.title}</span>
                <span className="">{item.emoji}</span>
              </motion.div>
            ))}
            </div>
        </Card>

        <Card className="h-[320px] p-0 relative lg:col-span-1">
            <Image className="h-full w-full object-cover object-left-top" src={mapImage} alt="map image"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full afrer:outline-gray-950/30" >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

            <Image className="size-20" src={smileMemoji} alt="smileMemoji"/>
            </div>
        </Card>


        </div>
      </div>
      </div>
      </div>
  )
};
