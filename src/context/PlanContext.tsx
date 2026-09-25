'use client'

import { FitLogData } from '@/types/fitlog'
import React, { createContext, useEffect, useState } from 'react'

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
  const [isLoaded, setIsLoaded] = useState(false)

  // get data from local storage

  useEffect(() => {
    const plans = localStorage.getItem('workoutPlans')
    const save = localStorage.getItem('savedWorkouts')

    if (plans) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWorkoutPlans(JSON.parse(plans))
    }
    if (save) {
      setSavedWorkouts(JSON.parse(save))
    }
    setIsLoaded(true)
  }, [])

  // Save workout plans

  useEffect(() => {
    if (!isLoaded) return
    localStorage.setItem('workoutPlans', JSON.stringify(workoutPlans))
  }, [workoutPlans, isLoaded])

  // Save save workout

  useEffect(() => {
    if (!isLoaded) return
    localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts))
  }, [savedWorkouts, isLoaded])

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
