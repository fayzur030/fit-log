import { getFitLog } from '@/services/getWorkouts'
import WorkoutLibrary from './WorkoutLibrary'

const WorkoutGrid = async () => {
  const fetchFitLog = await getFitLog()

  return (
    <div id='library' className='max-w-7xl mx-auto mt-12 px-4 md:px-4 lg:px-0'>
      <div>
        <WorkoutLibrary workouts={fetchFitLog} />
      </div>
    </div>
  )
}

export default WorkoutGrid
