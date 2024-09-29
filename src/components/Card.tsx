import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";



export const Card = ({ className , children, ...other} : ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={twMerge(
                "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-white/20  after:rounded-3xl after:pointer-events-none p-6",
                className
        )}
        {...other}
        
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
            ></div>
            {children}
            </div>
    )

}