import { FitLogData } from '@/types/fitlog'

export const getWorkoutById = async (id: string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch fitlog single data ')
  }

  const workout: FitLogData = await response.json()

  return workout
}
