import Link from 'next/link'
import React from 'react'

const EmptyMessage = () => {
  return (
    <div className='mx-auto flex min-h-75 max-w-7xl items-center justify-center rounded-lg border border-dashed border-[#2B303D] bg-[#151921]/20'>
      <div className='space-y-2.5 text-center'>
        <h1 className='text-2xl font-bold text-white'>NOTHING HERE YET</h1>

        <p className='font-inter text-base font-normal text-[#A1A1AA]'>
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href='/'
          className='btn w-full rounded-full bg-[#C2F800] px-6 text-sm text-black sm:w-auto'
        >
          Go to workouts
        </Link>
      </div>
    </div>
  )
}

export default EmptyMessage
