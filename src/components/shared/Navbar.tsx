'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import logo from '@/assets/logo.png'
import { usePathname } from 'next/navigation'
import { WorkoutContext } from '@/context/PlanContext'

const navLinks = [
  {
    name: 'Workouts',
    href: '/',
  },
  {
    name: 'My Plan',
    href: '/my-plan',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { workoutPlans, savedWorkouts } = useContext(WorkoutContext)

  return (
    <nav className='sticky top-0 z-50 border-b border-[#1c1f26] backdrop-blur'>
      <div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-17 sm:px-6 lg:h-18 lg:px-8'>
        {/* Logo */}
        <Link
          href='/'
          onClick={() => setIsOpen(false)}
          className='flex shrink-0 items-center gap-2 sm:gap-3'
        >
          <Image
            src={logo}
            alt='FITLOG'
            width={32}
            height={32}
            className='h-7 w-7 sm:h-8 sm:w-8'
          />

          <h1 className='text-lg font-bold tracking-tight text-white sm:text-xl'>
            FITLOG
          </h1>
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div className='hidden items-center gap-2 sm:flex md:gap-2 lg:gap-2'>
          {navLinks.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm lg:px-5 ${
                  active
                    ? 'bg-[#132314] text-[#CCFF00]'
                    : 'text-[#9CA3AF] hover:bg-[#15191E] hover:text-[#CCFF00]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop / Tablet Actions */}
        <div className='hidden items-center gap-6 sm:flex lg:gap-8'>
          <Link
            href='/my-plan'
            className='flex items-center gap-3 text-base font-medium text-[#D1D5DB] transition-colors hover:text-white'
          >
            <span>Plan</span>

            {workoutPlans.length === 0 ? (
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#CCFF00] text-lg font-semibold text-black'>
                0
              </span>
            ) : (
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#CCFF00] text-lg font-semibold text-black'>
                {workoutPlans.length}
              </span>
            )}
          </Link>

          <Link
            href='/my-plan'
            className='flex items-center gap-3 text-base font-medium text-[#D1D5DB] transition-colors hover:text-white'
          >
            <span>Saved</span>
            {savedWorkouts.length === 0 ? (
              <span className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#30343D] text-lg font-medium text-[#D1D5DB]'>
                0
              </span>
            ) : (
              <span className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#30343D] text-lg font-medium text-[#D1D5DB]'>
                {savedWorkouts.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2F38] text-[#9CA3AF] transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00] sm:hidden'
          aria-label='Toggle menu'
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='border-t border-[#222630] bg-[#0B0D10] sm:hidden'>
          <div className='mx-auto w-full max-w-7xl px-4 py-4'>
            {/* Mobile Navigation */}
            <div className='flex flex-col gap-1'>
              {navLinks.map((link) => {
                const active = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'bg-[#132314] text-[#CCFF00]'
                        : 'text-[#9CA3AF] hover:bg-[#15191E] hover:text-[#CCFF00]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Plan / Saved */}
            <div className='mt-3 flex items-center justify-center gap-8 border-t border-[#222630] pt-4'>
              <Link
                href='/my-plan'
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-2.5 text-sm font-medium text-[#D1D5DB] transition-colors hover:text-white'
              >
                <span>Plan</span>

                {workoutPlans.length === 0 ? (
                  <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#CCFF00] text-lg font-semibold text-black'>
                    0
                  </span>
                ) : (
                  <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#CCFF00] text-lg font-semibold text-black'>
                    {workoutPlans.length}
                  </span>
                )}
              </Link>

              <Link
                href='/my-plan'
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-2.5 text-sm font-medium text-[#D1D5DB] transition-colors hover:text-white'
              >
                <span>Saved</span>

                {savedWorkouts.length === 0 ? (
                  <span className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#30343D] text-lg font-medium text-[#D1D5DB]'>
                    0
                  </span>
                ) : (
                  <span className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#30343D] text-lg font-medium text-[#D1D5DB]'>
                    {savedWorkouts.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
