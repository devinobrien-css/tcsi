import gsap from "gsap"
import { useEffect } from "react"
import { Section, SectionHeader, TextSection } from "../components/custom.library"


const Depthfullness = () => {
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
                Depthfullness
            </SectionHeader>
            <TextSection  >
                New Text Here
            </TextSection>
        </Section>
    )
}
export default Depthfullness
