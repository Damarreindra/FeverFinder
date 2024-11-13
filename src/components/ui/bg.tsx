import { cn } from '@/lib/utils'
import DotPattern from './dot-pattern'

function Background() {
  return (
    <div className=''>
          <DotPattern
        className={cn(
            "[mask-image:linear-gradient(to_bottom_right,transparent,white,transparent)] ",
        )}
      />

    </div>
  )
}

export default Background