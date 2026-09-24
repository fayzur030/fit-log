import { getFitLog } from '@/services/getWorkouts'
import WorkoutCard from './WorkoutCard'

const WorkoutGrid = async () => {
  const fetchFitLog = await getFitLog()

  return (
    <div id='library' className='max-w-7xl mx-auto mt-12 px-4 md:px-4 lg:px-0'>
      <div className='space-y-2'>
        <h1 className='text-2xl md:text-3xl font-bold text-[#ffffff]'>
          THE LIBRARY
        </h1>
        <p className='font-inter text-[#9CA3AF] text-sm'>
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-5'>
        {fetchFitLog.map((item) => (
          <WorkoutCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default WorkoutGrid
