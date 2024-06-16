import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import {watchImg, rightImg} from '../utils'
import VideoCarousel from './VideoCarousel';
import { animateWithGsap } from '../utils/anime';

const Highlights = () =>{

  useGSAP(() => {
 animateWithGsap('.link',{
  opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.inOut',  
    stagger: 0.3

}
 )
  animateWithGsap('#title', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.inOut'
  })
  }, [])

  return (
   <section id='highlights' className='w-full common-padding h-full overflow-hidden bg-zinc'>
      <div className='w-full screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
        <h1 id='title' className='section-heading'>
          Get the highlights.
        </h1>
        <div className='flex flex-wrap items-end'>
          <p className='link'>Watch the film
          <img src={watchImg} alt="watch" className='ml-2 mr-5 sm:mb-1'/>
          </p>
          
          <p className='link'>Watch the Event
          <img src={rightImg} alt="watch" className='ml-2 scale-150'/>
          </p>
          
        </div>
        </div>
        <VideoCarousel></VideoCarousel>
      </div>
   </section>
  )
}

export default Highlights
