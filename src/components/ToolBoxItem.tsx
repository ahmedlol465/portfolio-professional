import { twMerge } from "tailwind-merge"
import { TechIcone } from "./TechIcon"
import { Fragment } from "react"

export const ToolBoxItem = ({ toolBoxItems, className, itemWrapperClassName }: {
    toolBoxItems: {title: string, iconType: React.ElementType}[]
  className?: string
  itemWrapperClassName?: string
}) => {
    return (
        <div className={twMerge("flex  after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-16 after:bg-gradient-to-r after:from-gray-800 after:to-transparent",
            className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemWrapperClassName)}>
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {toolBoxItems.map((item) => (
              <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                <TechIcone component={item.iconType}/>
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
                </Fragment>
              ))}
            
            </div>
    </div>
    
        )
}