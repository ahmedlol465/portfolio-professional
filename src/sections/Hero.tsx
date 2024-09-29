import momojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrBit } from "@/components/HeroOrBit";

export const HeroSection = () => {
  return (
    <div className="overflow-hidden py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            // backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="w-[620px] hero-ring"></div>
        <div className="w-[820px] hero-ring"></div>
        <div className="w-[1020px] hero-ring"></div>
        <div className="w-[1220px] hero-ring"></div>

        <HeroOrBit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="w-8 text-emerald-300/20" />
        </HeroOrBit>
        <HeroOrBit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="w-5 text-emerald-300/20" />
        </HeroOrBit>
        <HeroOrBit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="w-2 rounded-full text-emerald-300/20"></div>
        </HeroOrBit>
        <HeroOrBit size={550} rotation={20} shouldOrbit orbitDuration="36s">
          <StarIcon className="w-12 text-emerald-300" />
        </HeroOrBit>
        <HeroOrBit size={590} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="w-8 text-emerald-300" />
        </HeroOrBit>
        <HeroOrBit size={530} rotation={180} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <SparkleIcon className="w-10 text-emerald-300/20" />
        </HeroOrBit>
        <HeroOrBit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="w-2 rounded-full text-emerald-300/20"></div>
        </HeroOrBit>
        <HeroOrBit size={710} rotation={150} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="w-14 text-emerald-300/20" />
        </HeroOrBit>
        <HeroOrBit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
          <div className="w-3 rounded-full text-emerald-300/20"></div>
        </HeroOrBit>
        <HeroOrBit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="w-28 text-emerald-300" />
        </HeroOrBit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={momojiImage} className="w-[100px]" alt="momoji" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex text-sm font-semibold items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full w-2.5">
              <div className="bg-green-50 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div>Available for new Projects</div>
          </div>
        </div>
        <div className="mt-4 text-center text-white/60 md:text-lg">
          <h1 className="font-serif text-3xl text-center md:text-5xl mt-8 tracking-wide">Building Exceptional User Experience</h1>
          <p>
            I specialize in transforming design into functional, high-performance web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my Work</span>
            <ArrowDown className="w-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
