import Hero from '@/components/organism/Hero'
import { IllMarquee } from '@/components/organism/IllMarquee'
import RegularButton from '@/components/ui/regular-button'


function Landing() {
    return (
        <div className='h-screen w-screen overflow-x-hidden'>
            <Hero />
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5  p-12'>
                    <div className='border border-gray-300 p-8 rounded-lg '>
                        <h1 className='text-xl font-semibold font-geist'>
                            Report your friend
                        </h1>
                        <p className='text-base font-medium font-geist text-gray-400 mt-5 h-12 '>
                            Create a report indicating that your friend is ill.
                        </p>
                        <RegularButton word='Create a report' />
                    </div>
                    <div className='border border-gray-300 p-8 rounded-lg '>
                        <h1 className='text-xl font-semibold font-geist'>
                            Be the Champions
                        </h1>
                        <p className='text-base font-medium font-geist text-gray-400 mt-5  h-12'>
                            Prove them wrong about you. Show them that they’re more prone to illness than you are.
                        </p>
                        <RegularButton word='Leaderboard' />
                    </div>
                    
                </div>
                <IllMarquee />
            </section>
        </div>
    )
}

export default Landing