import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' })
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: '0.05'
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 2,
            stagger: 0.5,
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }) 
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', {y: -200}, 0);


        const startValue= isMobile ? 'top 50%' : "center 60%";
        const endValue = isMobile ? '120% top' : "bottom top";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,                
        }
    })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
        })
    }

    }, [])


  return (
    <>
        <section id=  'hero' className='noisy'>
            <h1 className='title'>SIPNJOY</h1>

            <img 
            src="/images/hero-left-leaf.png"
            alt="left-leaf"
            className='left-leaf'
            />
            <img 
            src="/images/hero-right-leaf.png"
            alt="right-leaf"
            className='right-leaf'
            />

            <div className='body'>
                <div className='content'>
                    <div className='spcae-y-5 hidden md:block'>
                        <p>Fresh. Fizzy. Flawless.</p>
                        <p className='subtitle'>
                            Mocktails <br /> done right
                        </p>
                    </div>

                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every mocktail on our menu is a blend of premium ingredients, innovative 
                        spirit, and timeless recipes designed to delight your senses - and it is <strong>100% halal</strong>.   
                        </p>
                        <a href='#mocktails'>
                            View Mocktails
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <div className='video absolute inset-0'>
           <video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>
        </div>
    </>
  )
}

export default Hero