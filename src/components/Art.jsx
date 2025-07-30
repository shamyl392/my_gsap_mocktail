import { useMediaQuery } from "react-responsive"
import { featureLists, goodLists } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    useGSAP(() =>{
        const start = isMobile ? 'top 20%' : 'top top'

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        })

        maskTimeline
        .to('.will-fade', {
            opacity: 0, 
            stagger: 0.25,
            ease: 'expo.inOut',
        })
        .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut' })
        .to('#masked-content', {
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
        })
    })

  return (
    <div id="art">
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">THE ART</h2>

            <div className="content">
                <ul className="space-y-4 will-fade"> 
                    {goodLists.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <img  src="/images/check.png" alt="check.png"/>
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
                <div className="cocktail-img">
                    <img src="/images/under-img.jpg" alt="mocktail"
                    className="abs-center masked-img size-full object-contain"
                    />
                </div>
                <ul className="space-y-4 will-fade"> 
                    {featureLists.map((feature, index) => (
                        <li key={index} className="flex items-center justify-start gap-2">
                            <img  src="/images/check.png" alt="check.png"/>
                            <p className="md:w-fit w-60">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="masked-container">
                    <h2 className="will-fade">
                        Savor the Sparkle
                    </h2>
                    <div id="masked-content">
                        <h3>Not Just Made—Mastered</h3>
                        <p>Crafted for More Than Taste</p>
                    </div>
            </div>            
        </div>
    </div>
  )
}

export default Art