'use client'
import { FitLogData } from '@/types/fitlog'
import WorkoutCard from './WorkoutCard'
import SearchInput from './SearchInput'
import { useState } from 'react'

interface WorkoutProps {
  workouts: FitLogData[]
}

const WorkoutLibrary = ({ workouts }: WorkoutProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredWorkouts = workouts.filter((workout) => {
    const search = searchTerm.trim().toLowerCase()
    const matchName = workout.name.toLowerCase().includes(search)
    const tagName = workout.muscleGroups.some((item) =>
      item.toLowerCase().includes(search)
    )
    return matchName || tagName
  })

  return (
    <div>
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        {/* Library Info */}
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold text-white md:text-3xl'>
            THE LIBRARY
          </h1>

          <p className='font-inter text-sm text-[#9CA3AF]'>
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Search */}
        <div className='w-full md:w-72 lg:w-80'>
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-5'>
        {filteredWorkouts.length === 0 ? (
          <p className='col-span-full py-10 text-center text-red-500'>
            No workouts found.
          </p>
        ) : (
          filteredWorkouts.map((item) => (
            <WorkoutCard key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  )
}

export default WorkoutLibrary
