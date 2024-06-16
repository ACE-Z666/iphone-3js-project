import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 768){
       setVideoSrc(smallHeroVideo)
  }
    else{
    setVideoSrc(heroVideo)}
  
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
  
  
  return () => {
    window.removeEventListener('resize', handleVideoSrcSet);
  }
  }, [])
  


  useGSAP(() => {
   gsap.to('#hero', {opacity: 1, delay: 2.5, duration: 1}) ,
   gsap.to('#cta', {opacity: 1, y: -50, delay: 2.6 })
  }, [])
  return (
    <div>
      <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'> 
          <p id="hero" className='hero-title'>iPhone 15 Pro</p>
           <div className='md:w-10/12 w-9/12'>
            <video className='Pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
              <source src={videoSrc} type="video/mp4"/>
            </video>
          </div>

        </div>
        <div  id='cta' className='flex  flex-col items-center opacity-0 translate-y-20 '>
         <a href="#highlisghts" className='btn'>Buy</a>
         <p className='font-medium  text-.5xl'>From 4050/month or 79999/-</p>
        </div>
      </section>
    </div>
  )
}

export default Hero