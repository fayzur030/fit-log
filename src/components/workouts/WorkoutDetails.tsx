import { FitLogData } from '@/types/fitlog'
import Image from 'next/image'
import AddTodayPlanBtn from '../button/AddTodayPlanBtn'
import SavePlanBtn from '../button/SavePlanBtn'
interface Iwordout {
  workout: FitLogData
}

const DetailsPage = ({ workout }: Iwordout) => {
  const metaItems = [
    { label: 'EQUIPMENT', value: workout.equipment },
    { label: 'DIFFICULTY', value: workout.difficulty },
    { label: 'SETS', value: workout.sets },
    { label: 'REPS', value: workout.reps },
    { label: 'DURATION', value: `${workout.duration} min` },
    { label: 'CALORIES', value: `${workout.caloriesBurned} kcal` },
    { label: 'RATING', value: workout.rating },
  ]
  return (
    <div className='mx-auto my-12 max-w-7xl px-4 lg:px-0'>
      <div className='grid grid-cols-1 gap-8 md:gap-16 rounded-3xl items-stretch justify-between  lg:grid-cols-12 lg:p-8'>
        {/* Left Side - Image */}
        <div className='overflow-hidden rounded-2xl lg:col-span-6'>
          <Image
            src={workout.image}
            alt={workout.name}
            width={588}
            height={735}
            className='h-full w-full rounded-2xl '
          />
        </div>

        {/* Right Side - Content */}
        <div className='flex flex-col justify-between lg:col-span-6 card'>
          <div className='card-body p-0'>
            {/* Title */}
            <h1 className='font-oswald text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl'>
              {workout.name}
            </h1>

            {/* Description */}
            <p className='text-[#9CA3AF] max-w-140 text-base font-inter'>
              {workout.description}
            </p>

            {/* Muscle Groups / Badges */}
            <div className='mt-4 flex flex-wrap gap-2'>
              {workout.muscleGroups?.map((muscle, index) => (
                <span
                  key={index}
                  className='badge border-none bg-[#CCFF00] font-semibold text-black px-4 py-3 text-xs'
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Meta Details List */}

            <div className='overflow-x-auto rounded-box border border-base-content/5 bg-[#1E2330]/40 mt-10'>
              <table className='table w-full'>
                <tbody>
                  {metaItems.map((item, index) => (
                    <tr
                      key={index}
                      className='border-b border-[#2A2F3A] last:border-b-0'
                    >
                      <td className='text-xs font-semibold uppercase text-[#9CA3AF] md:text-sm'>
                        {item.label}
                      </td>
                      <td className='py-4 text-right font-inter text-sm font-normal text-[#E5E7EB]'>
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Instructions Section */}
            {workout.instructions && workout.instructions.length > 0 && (
              <div className='mt-6 pt-6'>
                <h3 className='text-sm font-bold uppercase tracking-wider text-white'>
                  INSTRUCTIONS
                </h3>
                <ol className='mt-3 space-y-2 font-inter text-sm leading-relaxed text-[#D1D5DB]'>
                  {workout.instructions.map((step, idx) => (
                    <li key={idx} className='flex gap-2'>
                      <span className='font-medium text-[#D1D5DB]'>
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Button */}
            <div className='mt-8 flex flex-col md:flex-row items-center gap-5'>
              <AddTodayPlanBtn workout={workout} />
              <SavePlanBtn workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
