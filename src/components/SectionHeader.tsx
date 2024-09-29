export const SectionHeader = ({
    title,
    eyeBrow,
    desc
}: {
    title: string;
    eyeBrow: string;
    desc: string
}) => {
    return (
        <>
             <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            {eyeBrow}
          </p>
          
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
            {title}
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          {desc}
            </p>
        </>
    )
}