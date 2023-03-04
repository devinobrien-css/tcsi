import gsap from "gsap"
import { useEffect } from "react"
import { Section, SectionHeader, TextSection, VideoAdSm } from "../components/custom.library"


const Videos = () => {
    useEffect(()=>{

        gsap.fromTo("#text-section",{
            opacity:0
        },{
            opacity:1
        })
        .then(() => {
            gsap.fromTo("#video",{
                opacity:1,
                scale:0
            },{
                scale:1
            })
        })
    },[])

    return (
        <Section className="text-white" id="text-section">
            <SectionHeader>
                Videos
            </SectionHeader>
            <TextSection>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure dolorem nemo cum consequuntur, incidunt vero odio harum 
                voluptates qui, totam debitis cupiditate repellat! Obcaecati 
                iusto, beatae ab esse ipsam perferendis, modi unde architecto 
                fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                eum sint deleniti.
            </TextSection>
            <div className="md:flex justify-between my-2" >
                <VideoAdSm className="md:w-[48%]" href="https://youtu.be/NmiwAV9i5cY" embed="https://youtube.com/embed/NmiwAV9i5cY" id="video">
                    What do we mean by "Sympathy"?
                </VideoAdSm>
                <VideoAdSm className="md:w-[48%] mt-4 md:mt-0" href="https://youtu.be/q2bykgueC1I" embed="https://youtube.com/embed/q2bykgueC1I" id="video">
                    The Center's Affiliation with SOS
                </VideoAdSm>
            </div>
        </Section>
    )
}
export default Videos
