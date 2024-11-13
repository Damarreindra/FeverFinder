import { ArrowRight } from 'lucide-react';
import React from 'react'
interface RegularButtonInt {
    word?: string;
    
   
  }
function RegularButton({
    word
}:RegularButtonInt) {
 
  return (
    <button className='bg-black text-white font-medium flex p-2 rounded-lg gap-3 mt-5'>
    {word}
    <ArrowRight width={18}/>
    </button>
  
  )
}

export default RegularButton