import gsap from "gsap"
import { useEffect } from "react"
import { Hyperlink, Note, Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns the applications page
 */
const Applications = () => {
    useEffect(()=>{
        gsap.fromTo("#note",{
            opacity:0
        },{})

        gsap.fromTo("#text-section",{
            opacity:0
        },{
            opacity:1

        })
        .then(() => {
            gsap.fromTo("#note",{
                opacity:1,
                scaleX:0
            },{
                scaleX:1
    
            })
        })
    },[])

    return (
        <Section className="text-white" id="text-section">
            <SectionHeader>
                Applications
            </SectionHeader>
            <TextSection>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure dolorem nemo cum consequuntur, incidunt vero odio 
                harum voluptates qui, totam repellat! 
                <Hyperlink to="#">This is a hyperlink</Hyperlink> 
                Obcaecati iusto, beatae ab esse ipsam perferendis, modi unde architecto 
                fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                eum sint deleniti.
            </TextSection>
            <Note id="note">
                Here's an example of a note
            </Note>
        </Section>
    )
}
export default Applications