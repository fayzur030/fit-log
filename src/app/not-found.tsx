import Link from 'next/link'
import { ArrowLeft, Dumbbell } from 'lucide-react'

const NotFound = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#090A0D] px-4 text-white'>
      <div className='w-full max-w-xl text-center'>
        {/* Icon */}
        <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#CCFF00] text-black'>
          <Dumbbell size={30} />
        </div>

        {/* 404 */}
        <h1 className='text-7xl font-bold tracking-tight text-[#CCFF00] sm:text-8xl'>
          404
        </h1>

        <h2 className='mt-4 text-2xl font-semibold sm:text-3xl'>
          Workout Not Found
        </h2>

        <p className='mx-auto mt-3 max-w-md text-sm leading-6 text-[#9CA3AF] sm:text-base'>
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back to your workouts.
        </p>

        {/* Button */}
        <Link
          href='/'
          className='mt-8 inline-flex items-center gap-2 rounded-lg bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b8e600]'
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
