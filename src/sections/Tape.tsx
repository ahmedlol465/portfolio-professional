import  StarIcon  from "@/assets/icons/star.svg";
import { Fragment } from "react";


const words = [
  "Preformance",
  "Accessible",
  "Responsive",
  "Intuitive",
  "Usable",
  "Maintainable",
  "Scalable",
  "Robust",
  "Modular",
  "Reliable"
];


export const TapeSection = () => {


return (
  <div className="py-16 lg:py-24">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-hidden -rotate-3 -mx-1 relative">
      <div className="flex  after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-16 after:bg-gradient-to-r after:from-gray-800 after:to-transparent">
        <div className="flex flex-none gap-4 py-3 px-4 -translate-x-1/2 animate-move-left [animation-duration:30s]">
         {[...new Array(2)].map((_, idx) => (
        <Fragment key={idx}>
          {words.map((word) => (
            <div key={word} className="inline-flex gap-4 items-center">
              <span className="text-gray-900 uppercase font-extrabold text-sm">
                {word}
              </span>
              <StarIcon className="h-6 w-6 text-gray-900 -rotate-12" />
            </div>
          ))}
        </Fragment>
      ))}
        </div>
      </div>
    </div>
  </div>
);

};
