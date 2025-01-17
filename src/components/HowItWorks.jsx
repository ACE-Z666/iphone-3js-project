import React, { useRef } from 'react'
import gsap from 'gsap'
import { chipImg } from '../utils'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/anime'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {

  const videoRef = useRef();

  useGSAP(() => {
    gsap.to ('#chip', {
        scrollTrigger: {
            trigger: '#chip',
            start: '20% bottom' }, 
          opacity: 1,
          scale: 1.4,
          duration: 2,
          ease: 'power2.inOut'

    })
    animateWithGsap('.g_fadeIn',{
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut'
    })
  })

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id="chip" className="flex-center w-full my-20 opacity-0">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                  A17 Pro chip.<br/> A Monster PowerHouse
                </h2>

                <p className='hiw-subtitle'>
                   It's here. The biggest redesign in the history of Apple GPUs.
                </p>

            </div>
            <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col md:pl-28">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
              </div>
        </div>

    </section>
  )
}

export default HowItWorks

