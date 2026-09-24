import footerLogo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#090A0D] mt-10 md:mt-14 border-t border-[#1c1f26] h-18'>
      <footer className='max-w-7xl mx-auto py-4 flex justify-between items-center'>
        <Link href='/' className='flex shrink-0 items-center gap-2 sm:gap-3'>
          <Image
            src={footerLogo}
            alt='FITLOG'
            width={32}
            height={32}
            className='h-7 w-7 sm:h-8 sm:w-8'
          />

          <h1 className='text-lg font-bold tracking-tight text-white sm:text-xl'>
            FITLOG
          </h1>
        </Link>
        <p className='text-sm font-inter text-[#6B7280]'>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </footer>
    </div>
  )
}

export default Footer
