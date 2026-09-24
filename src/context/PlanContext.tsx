'use client'

import { FitLogData } from '@/types/fitlog'
import React, { createContext, useState } from 'react'

interface WorkoutContextType {
  workoutPlans: FitLogData[]
  setWorkoutPlans: React.Dispatch<React.SetStateAction<FitLogData[]>>
  savedWorkouts: FitLogData[]
  setSavedWorkouts: React.Dispatch<React.SetStateAction<FitLogData[]>>
}

export const WorkoutContext = createContext<WorkoutContextType>({
  workoutPlans: [],
  setWorkoutPlans: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
})

export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [workoutPlans, setWorkoutPlans] = useState<FitLogData[]>([])
  const [savedWorkouts, setSavedWorkouts] = useState<FitLogData[]>([])
  const shareData = {
    workoutPlans,
    setWorkoutPlans,
    savedWorkouts,
    setSavedWorkouts,
  }

  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  )
}
