import { FitLogData } from '@/types/fitlog'
import { Clock, Flame, Star } from 'lucide-react'
import Image from 'next/image'
interface ItemsProps {
  item: FitLogData
}

const WorkoutCard = ({ item }: ItemsProps) => {
  return (
    <div>
      <div className='card bg-[#222630]/40  group w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/30 hover:shadow-xl'>
        <figure>
          <Image
            src={item.image}
            alt={item.name}
            width={400}
            height={400}
            className=' aspect-video w-full object-cover'
          />
        </figure>
        <div className='card-body'>
          <p className='text-black badge bg-[#C2F800] text-xs md:text-xs font-bold rounded-full py-4 '>
            {item.muscleGroups}
          </p>
          <h2 className='card-title text-lg md:text-xl'>{item.name}</h2>
          <p className='font-inter text-[#9CA3AF]'>{item.equipment}</p>
          <div className='divider'></div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Clock size={15} className='text-[#C2F800]' />{' '}
              <span className='text-[#9CA3AF]'>{item.duration} min</span>
            </div>
            <div className='flex items-center gap-2'>
              <Flame size={15} className='text-[#C2F800]' />{' '}
              <span className='text-[#9CA3AF]'>{item.caloriesBurned} kcal</span>
            </div>
            <div className='flex items-center gap-2'>
              <Star size={15} className='text-[#C2F800]' />{' '}
              <span className='text-[#9CA3AF]'>{item.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutCard
