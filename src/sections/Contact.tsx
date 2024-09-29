import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className="container">
      <div className='bg-gradient-to-r from-emerald-300 to-sky-900 py-8 px-10  md:text-left rounded-3xl text-center relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <div className=''>
      <h2 className='font-serif text-2xl md:text-3xl'>Let's create somthing amazing together</h2>
      <p className='text-sm mt-2 md:text-base'>Ready to bring youe next project to life? Let's connect and  discuss how
        we can work together to bring your vision to life. I can help you achieve your goals.</p>
        </div>
        <div>
      <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
      <span className='fonr-semibold'>Contact Me</span>
      <ArrowUpRightIcon className="size-4"/>
        </button>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
};
