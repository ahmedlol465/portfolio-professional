import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'


const footerLinks = [
  {
    title: 'Youtube',
    href: '#'
  },
  {
    title: 'Linked',
    href: '#'
  },
  {
    title: 'Instagram',
    href: '#'
  },
  {
    title: 'twitter',
    href: '#'
  },
]


export const Footer = () => {
  return (
<footer className="relative overflow-x-hidden -z-10 ">
  <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 bg-gradient-to-t from-black/70 z-[-1] ">
    <div className=" absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-black/30 mask mask-radial-gradient">
    </div>
  </div>


      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between'>
          <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col items-center md:flex-row gap-8'>
            {footerLinks.map((link) => (
              <a className='inline-flex items-center gap-1.5' href={link.href} key={link.title}>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
  