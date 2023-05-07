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
●	Depthfulness
●	Perspective Deficit
●	Agency
●	Presence and Reflections
●	Reflective Spontaneity
●	Revisable Inference
●	Countering (Disarming)
●	Subliminal Exposition
●	Processification
            </TextSection>
        </Section>
    )
}
export default Components
