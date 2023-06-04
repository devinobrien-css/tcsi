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
                As Robert learns more about the phenomenon of sympathetic intelligence, we realize that the possibilities for its application are simply endless. There is simply no part of the human existence that does not involve sympathetic intelligence to at least some degree, however small.

Also, at the center for sympathetic intelligence we have realized that the introduction of the concept will take time to develop and we believe it's application is more about optimizing and understanding the presence that it already has in our lives. In other words the more informed we are about it the more likely we are able to apply it in a constructive and more contributive manner.

One aspect about the concept that becomes clear is that there is a macro to micro characteristic. So, in order to both take advantage of that fact and begin the process of developing and applying the concept we are creating panels that address large professional communities within society. We believe this is the best way to begin. 3 of the panels that we have began are; The Education panel, The Health care panel, and The Police Panel.

We will add more panels as the work of the center develops. 
                <Hyperlink to="#">This is a hyperlink</Hyperlink> 
            </TextSection>
            <Note id="note">
                Here's an example of a note
            </Note>
        </Section>
    )
}
export default Applications
