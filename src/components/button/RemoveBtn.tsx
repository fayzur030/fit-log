'use client'
import { WorkoutContext } from '@/context/PlanContext'
import { FitLogData } from '@/types/fitlog'
import { showSuccessToast } from '@/utils/toast'
import { X } from 'lucide-react'
import { useContext } from 'react'
interface PlanProps {
  plan: FitLogData
}

const RemoveBtn = ({ plan }: PlanProps) => {
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutContext)
  const handelRemove = (id: number) => {
    const remove = workoutPlans.filter((item) => item.id !== id)
    setWorkoutPlans(remove)
    showSuccessToast(`${plan.name} removed from your plan!`)
  }
  return (
    <button
      className='shrink-0 p-2 text-gray-400 transition hover:text-white cursor-pointer hover:bg-red-400 rounded-full transform duration-500 '
      onClick={() => handelRemove(plan.id)}
    >
      <X size={18} />
    </button>
  )
}

export default RemoveBtn
