'use client'
import { WorkoutContext } from '@/context/PlanContext'
import { useContext } from 'react'

const statsWorkoutPlans = () => {
  const { workoutPlans } = useContext(WorkoutContext)

  // workoutPlans
  const totalMinutes = workoutPlans.reduce(
    (sum, item) => sum + item.duration,
    0
  )
  const totalCalories = workoutPlans.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0
  )

  const statsWorkoutPlans = [
    {
      label: 'Exercises',
      value: workoutPlans.length,
    },
    {
      label: ' Minutes',
      value: totalMinutes,
    },
    {
      label: 'Calories',
      value: totalCalories,
    },
  ]

  return (
    <div className='max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-3 rounded-lg bg-[#232732]/40 p-5 sm:p-6'>
        {statsWorkoutPlans.map((stat, idx) => (
          <div
            key={idx}
            className={`${idx === 1 || idx === 2 ? 'sm:border-t-0 sm:border-l border-[#3A3F4A] sm:py-0 sm:pl-8' : ''}`}
          >
            <p className={`text-[#8A92A0] font-inter text-sm sm:text-base`}>
              {stat.label}
            </p>
            <h1
              className={` text-[#CCFF00] font-bold text-3xl sm:text-4xl mt-1 ${idx === 1 || idx === 2 ? 'text-[#FFFFFF]' : ''}`}
            >
              {stat.value}
            </h1>
          </div>
        ))}
      </div>
      {/* tab */}
      {/* name of each tab group should be unique */}
    </div>
  )
}

export default statsWorkoutPlans
