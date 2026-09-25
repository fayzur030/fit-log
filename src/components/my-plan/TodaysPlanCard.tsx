import { FitLogData } from '@/types/fitlog'
import { Clock, Flame, Star, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import MarkAsDoneBtn from '../button/MarkAsDoneBtn'
import RemoveBtn from '../button/RemoveBtn'

interface PlanProps {
  plan: FitLogData
}

const TodaysPlanCard = ({ plan }: PlanProps) => {
  console.log(plan)
  return (
    <div className='flex w-full flex-col gap-4 rounded-2xl border border-gray-800 bg-[#232732]/40 p-4 text-white sm:flex-row sm:items-center sm:justify-between'>
      {/* Left Section: Image & Main Info */}
      <div className='flex min-w-0 w-full items-center gap-4 sm:w-auto'>
        <Image
          src={plan.image}
          alt={plan.name}
          width={144}
          height={80}
          className='h-20 w-28 shrink-0 rounded-xl object-cover sm:w-36'
        />

        <div className='flex min-w-0 flex-col gap-1'>
          <h1 className='truncate text-base font-bold uppercase tracking-wide text-white sm:text-lg'>
            {plan.name}
          </h1>

          <p className='truncate text-sm font-medium text-gray-400'>
            {plan.equipment}
          </p>

          {/* Stats Row */}
          <div className='mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#9CA3AF] sm:gap-4 sm:text-sm'>
            <div className='flex items-center gap-1.5'>
              <Clock size={15} className='shrink-0 text-[#C2F800]' />
              <span>{plan.duration} min</span>
            </div>

            <div className='flex items-center gap-1.5'>
              <Flame size={15} className='shrink-0 text-[#C2F800]' />
              <span>{plan.caloriesBurned} kcal</span>
            </div>

            <div className='flex items-center gap-1.5'>
              <Star size={15} className='shrink-0 text-[#C2F800]' />
              <span>{plan.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Action Buttons */}
      <div className='flex w-full items-center gap-2 sm:w-auto sm:shrink-0 sm:gap-3'>
        <Link href={`fit-log-details/${plan.id}`}>
          <button className='flex-1 border border-[#374151] btn-outline bg-transparent rounded-full px-4 py-2 md:px-6 md:py-3 cursor-pointer  text-white'>
            View Details
          </button>
        </Link>

        <MarkAsDoneBtn plan={plan} />

        <RemoveBtn plan={plan} />
      </div>
    </div>
  )
}

export default TodaysPlanCard
