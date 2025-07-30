import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    })

    const scrollTimeline = gsap.timeline({ 
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        scrub: true,
        end: 'top top'
      },
     })

     scrollTimeline
     .from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.05
     })
     .from('.top-grid img, .bottom-grid img', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
     }, '-=0.05')
  })

  return (
    <div id="about">
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Mocktails</p>
            <h2>Where very detail matters <span className='text-white'>- </span>
            from start to finish
            </h2>
          </div>

          <div className='sub-content'>
              <p>
                Every mocktail we serve is a reflection of our obsession with detail —
                from the first squeeze to the final sprig. That care is what turns a simple drink 
                into something truly memorable.
              </p>

              <div>
                <p className='md:text-xl text-xl font-bold'>
                  <span>4.9</span>/5
                </p>
                <p className='text-sm text-white-100'>
                  More than 1000 customers
                </p>
              </div>
          </div>
        </div>
      </div>

      <div className='top-grid'>
        <div className='md:col-span-3'>
          <div className=''/>
          <img  src="/images/abt1.png" alt="grid img 1" />
        </div>

        <div className='md:col-span-6'>
          <div className=''/>
          <img  src="/images/abt2.png" alt="grid img 2" />
        </div>

        <div className='md:col-span-3'>
          <div className=''/>
          <img  src="/images/abt5.png" alt="grid img 3" />
        </div>
      </div>
      <div className='bottom-grid'>
        
        <div className='md:col-span-8'>
          <div className=''/>
          <img  src="/images/abt3.png" alt="grid img 3" />
        </div>
        <div className='md:col-span-4'>
          <div className=''/>
          <img  src="/images/abt4.png" alt="grid img 4" />
        </div>
      </div>
    </div>
  )
}

export default About