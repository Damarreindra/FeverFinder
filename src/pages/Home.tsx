import { ChampionsGlobe } from '@/components/organism/ChampionsGlobe'
import { MenuMarquee } from '@/components/organism/MenuMarquee'
import Background from '@/components/ui/bg'
import { Award, File, Hospital } from 'lucide-react'

function Home() {
  return (
    <div className='h-screen  '>
      <nav className='relative z-10 w-full border-b border-gray-200 p-5 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='font-geist font-bold text-2xl'>
            FeverFinder
          </h1>
        </div>
      </nav>
      <main className='grid gap-5 p-12 grid-cols-3 grid-rows-2 max-w-7xl mx-auto  h-[90vh]  relative z-10 text-[#404040]'>
        <div className='relative border border-gray-200 col-start-1 col-span-3 md:col-span-1 rounded-xl bg-white shadow-lg  flex flex-col justify-end '>

          <MenuMarquee />

          <div className='p-3 '>
            <File />
            <h1 className='font-geist font-bold text-xl md:text-4xl '>
              Submit Report
            </h1>
            <p className='text-gray-400 text-sm md:text-base font-work'>
              Create report that your friend is ill.
            </p>
          </div>
        </div>
        <div className='relative border border-gray-200 col-span-3 md:col-start-2 md:col-span-2 rounded-xl bg-white shadow-lg flex flex-col justify-end'>
          <ChampionsGlobe />
          <div className="p-3">
            <Award />
            <h1 className='font-geist font-bold text-xl md:text-4xl  '>
              Hall of Fame
            </h1>
            <p className='text-gray-400 text-sm md:text-base font-work'>
              Show them you're the strongest among all.
            </p>
          </div>
        </div>
        <div className='border border-gray-200 col-start-1 col-span-3 rounded-xl bg-gray-200 shadow-lg p-5 flex flex-col justify-end'>
          <Hospital />
          <h1 className='font-geist font-bold text-3xl '>
            Ill List
          </h1>
          <p className='text-gray-400  font-work'>
            COMING SOON!
          </p>
        </div>
      </main>
      <Background />

    </div>
  )
}

export default Home