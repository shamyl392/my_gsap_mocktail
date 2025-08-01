import { useGSAP } from "@gsap/react"
import { socials, storeInfo } from "../../constants"
import { openingHours } from "../../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"
const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#content h2", {
            type: "words",

        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
                scrub: true,
            },
            ease: 'power1.inOut'
        })
        timeline.from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02
    })
    })

    

  return (
  <footer id="contact">
    <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
    <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
    <div className="content">
        <h2>Where to find us</h2>
        <div>
            <h3>Visit our store</h3>
            <p>{storeInfo.address}</p>
        </div>
        <div>
            <h3>Contact Us</h3>
            <p>{storeInfo.contact.phone}</p>
            <p>{storeInfo.contact.email}</p>
        </div>
        <div>
            <h3>Open Every Day</h3>
            {openingHours.map((time) => (
                <p key={time.date}>
                    {time.day}: {time.time}
                </p>
            ))}
        </div>
        <div>
            <h3>Socials</h3>

            <div className="flex-center gap-5 ">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"

                        aria-label={social.name}
                    >

                        <img src={social.icon} />
                    </a>
                ))}
            </div>
        </div>
    </div>

  </footer>
  )
}

export default Contact