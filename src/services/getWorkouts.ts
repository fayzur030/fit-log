import { FitLogData } from '@/types/fitlog'

export const getFitLog = async (): Promise<FitLogData[]> => {
  try {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog`)
    if (!response.ok) {
      throw new Error(`Failed to fetch fitlog data`)
    }
    const fitlog = await response.json()
    return fitlog
  } catch (error) {
    console.log(error)
  }
  return []
}
