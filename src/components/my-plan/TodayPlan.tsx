'use client'

import { WorkoutContext } from '@/context/PlanContext'
import { ChevronDown } from 'lucide-react'
import { useContext, useState } from 'react'
import TodaysPlanCard from './TodaysPlanCard'
import EmptyMessage from './EmptyMessage'
import SavedWorkoutsCard from './SavedWorkoutsCard'
import StatsWorkoutPlans from './StatsWorkoutPlans'
import StatsWorkoutSave from './StatsWorkoutSave'

const TodayPlan = () => {
  const [buttonType, setButtonType] = useState<'plan' | 'saved'>('plan')

  const handleUpdateBtnType = (type: 'plan' | 'saved') => {
    setButtonType(type)
  }
  const { workoutPlans, savedWorkouts } = useContext(WorkoutContext)

  return (
    <div className='max-w-7xl mx-auto mt-10'>
      {/* Tab Button */}

      {buttonType === 'plan' ? <StatsWorkoutPlans /> : <StatsWorkoutSave />}

      <div className=' mt-10 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        {/* Tabs */}
        <div className='flex w-full items-center gap-1 rounded-xl border border-[#232936] bg-[#0E1117] p-1 md:w-auto'>
          <button
            type='button'
            onClick={() => handleUpdateBtnType('plan')}
            className={`flex-1 rounded-lg px-4 py-2 text-sm transition-all duration-200 ease-in-out md:flex-none ${
              buttonType === 'plan'
                ? 'border border-[#2D3648] bg-[#1A2130] font-semibold text-white shadow-sm'
                : 'border border-transparent font-normal text-[#6D7588] hover:text-gray-300'
            }`}
          >
            Today’s Plan
          </button>

          <button
            type='button'
            onClick={() => handleUpdateBtnType('saved')}
            className={`flex-1 rounded-lg px-4 py-2 text-sm transition-all duration-200 ease-in-out md:flex-none ${
              buttonType === 'saved'
                ? 'border border-[#2D3648] bg-[#1A2130] font-semibold text-white shadow-sm'
                : 'border border-transparent font-normal text-[#6D7588] hover:text-gray-300'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort By */}
        <div className='flex w-full items-center justify-start gap-3 md:w-auto'>
          <span className='text-sm text-[#6D7588]'>Sort By</span>

          <div className='relative'>
            <select className='appearance-none rounded-lg border border-[#2D3648] bg-[#1A2130] px-3 py-2 pr-9 text-sm text-white outline-none transition-colors duration-200 hover:bg-[#222A3A] focus:border-[#3D4A63]'>
              <option value='duration'>Duration</option>
              <option value='calories'>Calories</option>
              <option value='name'>Name</option>
            </select>

            <ChevronDown
              size={16}
              className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8A93A6]'
            />
          </div>
        </div>
      </div>

      <div className='mt-6 space-y-6 w-full'>
        {buttonType === 'plan' ? (
          workoutPlans.length === 0 ? (
            <EmptyMessage />
          ) : (
            workoutPlans.map((plan) => (
              <TodaysPlanCard key={plan.id} plan={plan} />
            ))
          )
        ) : savedWorkouts.length === 0 ? (
          <EmptyMessage />
        ) : (
          savedWorkouts.map((workout) => (
            <SavedWorkoutsCard key={workout.id} workout={workout} />
          ))
        )}
      </div>
    </div>
  )
}

export default TodayPlan
