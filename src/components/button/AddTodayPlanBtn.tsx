'use client'
import { WorkoutContext } from '@/context/PlanContext'
import { FitLogData } from '@/types/fitlog'
import { showErrorTost, showSuccessToast } from '@/utils/toast'
import { CalendarPlus2 } from 'lucide-react'
import { useContext } from 'react'

interface WorkoutProps {
  workout: FitLogData
}
const AddTodayPlanBtn = ({ workout }: WorkoutProps) => {
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutContext)
  const isAdded = workoutPlans.some((item) => item.id === workout.id)

  const handelAddToPlan = () => {
    const isAlready = workoutPlans.some((item) => item.id === workout.id)
    if (isAlready) {
      showErrorTost(`Already Added to today's plan`)
      return
    }
    setWorkoutPlans((prev: FitLogData[]) => [...prev, workout])
    showSuccessToast(`Added to today's plan`)
  }
  return (
    <button
      className={`btn px-6 text-sm w-full sm:w-auto pointer-events-auto ${
        isAdded ? 'bg-[#E5E7EB] text-[#000000]' : 'bg-[#C2F800] text-black'
      }`}
      onClick={handelAddToPlan}
    >
      {isAdded ? (
        '✓ Added to today’s plan'
      ) : (
        <>
          <CalendarPlus2 size={16} />
          Add to today&apos;s plan
        </>
      )}
    </button>
  )
}

export default AddTodayPlanBtn
//  <CalendarPlus2 size={16} /> Add to today&apos;s plan
