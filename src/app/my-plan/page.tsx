import MyPlan from '@/components/my-plan/StatsWorkoutPlans'
import TodayPlan from '@/components/my-plan/TodayPlan'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto mt-6 px-4 md:px-4 lg:px-0'>
      <div className='space-y-2'>
        <h1 className='text-3xl md:text-4xl font-bold'>MY PLAN</h1>
        <p className='text-[#8A92A0] text-sm md:text-base font-inter font-normal'>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* <MyPlan /> */}
      <TodayPlan />
    </div>
  )
}

export default page
