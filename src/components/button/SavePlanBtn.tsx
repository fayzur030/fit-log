'use client'
import { WorkoutContext } from '@/context/PlanContext'
import { FitLogData } from '@/types/fitlog'
import { showErrorTost, showSuccessToast } from '@/utils/toast'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import { useContext } from 'react'
interface WorkoutProps {
  workout: FitLogData
}

const SavePlanBtn = ({ workout }: WorkoutProps) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext)

  const isAdded = savedWorkouts.some((item) => item.id === workout.id)

  const handelSaveToPlan = () => {
    const isAlready = savedWorkouts.some((item) => item.id === workout.id)
    if (isAlready) {
      showErrorTost(`Already Added save to plan`)
      return
    }
    setSavedWorkouts((prev: FitLogData[]) => [...prev, workout])
    console.log('button tiger', savedWorkouts)
    showSuccessToast(`Added save to plan`)
  }

  return (
    <button
      className={`btn w-full sm:w-auto btn-neutral btn-outline border-[#374151]  ${
        isAdded ? 'bg-[#E5E7EB] text-[#000000]' : ' text-white'
      }`}
      onClick={handelSaveToPlan}
    >
      {isAdded ? (
        <>
          <BookmarkCheck size={16} />
          Added save to plan
        </>
      ) : (
        <>
          <Bookmark size={16} />
          Save for later
        </>
      )}
    </button>
  )
}

export default SavePlanBtn
