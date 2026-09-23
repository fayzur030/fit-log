import heroImage from '@/assets/banner.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-4 lg:px-0 mt-6 md:mt-10 lg:mt-12'>
      <div className='bg-[#222630]/40 p-6 md:p-8 lg:p-14 rounded-lg border border-gray-50/15 shadow flex flex-col md:flex-row gap-8 md:gap-6 justify-between items-center'>
        <div className='space-y-4 md:space-y-6 lg:space-y-6 w-full md:w-1/2 lg:w-auto text-center md:text-start'>
          <h3 className='text-[#C2F800] font-bold text-sm'>WORKOUT LIBRARY</h3>

          <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl max-w-full md:max-w-5xl font-oswald font-extrabold leading-tight tracking-tight'>
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className='text-xs md:text-sm text-[#9CA3AF] max-w-96 font-normal leading-6 '>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className='bg-[#C2F800] btn px-6 text-[#000000] text-sm  w-full sm:w-auto'>
            BROWSE WORKOUTS
          </button>
        </div>

        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <Image src={heroImage} alt='Hero Image' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
