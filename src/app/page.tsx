import HeroSection from '@/components/workouts/HeroSection'
import WorkoutGrid from '@/components/workouts/WorkoutGrid'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <WorkoutGrid />
      </Suspense>
    </div>
  )
}
