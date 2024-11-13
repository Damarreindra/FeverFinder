import React from 'react'
import DotPattern from '../ui/dot-pattern'
import BlurIn from '../ui/blur-in'
import TypingAnimation from '../ui/typing-animation'
import Ripple from '../ui/ripple'
import { cn } from '@/lib/utils'
import RegularButton from '../ui/regular-button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='flex w-screen h-1/2 justify-center'>
    <div className="relative flex  w-screen flex-col items-center justify-center overflow-hidden  bg-background ">
        <DotPattern
            className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,white)] ",
            )} />
        <BlurIn
            word="FeverFinder "
            className="z-10 font-geist  whitespace-pre-wrap text-center font-bold tracking-tighter text-[#121212]"
        />
        <TypingAnimation
         className="text-lg md:text-xl font-thin  w-2/3  text-gray-400 dark:text-white"
text="Get caught your 'penyakitan' friends"
        />
        <Link to={'/home'}>
        <RegularButton word="Let's Try "/>
        </Link>
        <Ripple mainCircleSize={500} />
    </div>
</section>
  )
}

export default Hero