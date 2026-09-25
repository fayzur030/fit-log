import footerLogo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-10 h-auto border-t border-[#1c1f26] bg-[#090A0D] md:mt-14'>
      <footer className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8'>
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

        <p className='text-center font-inter text-xs text-[#6B7280] sm:text-right sm:text-sm'>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </footer>
    </div>
  )
}

export default Footer
