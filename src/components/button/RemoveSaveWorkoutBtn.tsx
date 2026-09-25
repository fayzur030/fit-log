'use client'
import { WorkoutContext } from '@/context/PlanContext'
import { FitLogData } from '@/types/fitlog'
import { showSuccessToast } from '@/utils/toast'
import { X } from 'lucide-react'
import { useContext } from 'react'
interface PlanProps {
  workout: FitLogData
}

const RemoveSaveWorkoutBtn = ({ workout }: PlanProps) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext)
  const handelRemove = (id: number) => {
    const remove = savedWorkouts.filter((item) => item.id !== id)
    setSavedWorkouts(remove)
    showSuccessToast(`${workout.name} removed from your saved workouts!`)
  }
  return (
    <button
      className='shrink-0 p-2 text-gray-400 transition hover:text-white cursor-pointer hover:bg-red-400 rounded-full transform duration-500 '
      onClick={() => handelRemove(workout.id)}
    >
      <X size={18} />
    </button>
  )
}

export default RemoveSaveWorkoutBtn
