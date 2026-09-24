import DetailsPage from '@/components/WorkoutDetails'
import { getWorkoutById } from '@/services/getWorkoutById'

interface DetailsProps {
  params: Promise<{ id: string }>
}

const page = async ({ params }: DetailsProps) => {
  const { id } = await params
  const workoutDetails = await getWorkoutById(id)

  return (
    <div>
      <DetailsPage workout={workoutDetails} />
    </div>
  )
}

export default page
