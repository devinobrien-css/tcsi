import gsap from "gsap"
import { useEffect } from "react"
import { Section, SectionHeader, TextSection } from "../components/custom.library"


const Components = () => {
    useEffect(()=>{
        gsap.fromTo("#text-section",{
            opacity:0
        },{
            opacity:1

        })
    },[])

    return (
        <Section className="text-white" id="text-section">
            <SectionHeader>
                Components
            </SectionHeader>
            <TextSection  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure dolorem nemo cum consequuntur, incidunt vero odio harum 
                voluptates qui, totam debitis cupiditate repellat! Obcaecati 
                iusto, beatae ab esse ipsam perferendis, modi unde architecto 
                fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                eum sint deleniti.
            </TextSection>
        </Section>
    )
}
export default Components