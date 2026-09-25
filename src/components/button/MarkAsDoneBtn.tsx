'use client'

import { WorkoutContext } from '@/context/PlanContext'
import { FitLogData } from '@/types/fitlog'
import { showSuccessToast } from '@/utils/toast'
import { Check } from 'lucide-react'
import { useContext } from 'react'

interface PlanProps {
  plan: FitLogData
}
const MarkAsDoneBtn = ({ plan }: PlanProps) => {
  const { setWorkoutPlans } = useContext(WorkoutContext)
  const handelMarkAsDone = (id: number) => {
    setWorkoutPlans((prev) => prev.filter((item) => item.id !== id))

    showSuccessToast(`${plan.name} marked as done!`)
  }

  return (
    <button
      className={`flex items-center gap-2 rounded-full py-3 bg-[#C2F800] px-3 cursor-pointer  text-xs font-medium text-black transition hover:bg-[#b0e200] sm:flex-none sm:px-4 sm:text-sm`}
      onClick={() => handelMarkAsDone(plan.id)}
    >
      <Check size={16} /> Mark as Done
    </button>
  )
}

export default MarkAsDoneBtn
