import gsap from "gsap"
import { useEffect } from "react"
import { Section, SectionHeader, TextSection } from "../components/custom.library"


const Socioneurological = () => {
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
                Socio-Neurological
            </SectionHeader>
            <TextSection>
                While SI exists within each individual, and this does mean it is an individual ‘intelligence’, the concept is unique in the way that it manifests externally. A core concept within the theory of SI derives from the word Sympathy. For sympathy to exist – there must be more than 1 entity involved. So, while a person has the potential for SI, it can’t manifest until that individual engages an entity that is separate from itself. To be clear – this could be an inanimate object, such as a book, or a painting, while this obviously also, and perhaps primarily includes other persons.
 
So, this means that it isn’t exclusively neurological – there must be an external or component other than the self, involved.
 
Of course, the primary function of Sympathetic Intelligence, as is true for the majority of ‘Intelligences’ is survival. Of course, that means that each individual is driven to survive, but also that the species is driven to survive. Both of these aspects, the individual and the species rely on Society to maintain our survival, our existence. As it relates to Sympathetic Intelligence, the primitive origins of this are found in the fact that each individual wants to be in sympathy with others around them, so that they will receive the protection of ‘the pack’, while the tribe too needs to be in sympathy with its members to garner the support of those members. So, it is to this counter dependency relationship that we are referring in our use of the term Socio Neurological.
 
We think that this makes Sympathetic Intelligence, a refined and more sophisticated human form or version of the ‘Collective Intelligence’, which can also be seen in organisms of lower order, such as birds flocking or insects swarming. The theory is that this more sophisticated form of collective intelligence, Sympathetic Intelligence, allows each individual more autonomy, while at the same time creating a bond between each individual and the community they live in.
 
In the result the Socio Neurological feature of Sympathetic Intelligence can be seen as a thread, that runs through society, creating what we actually sometimes maybe refer to as the ‘Fabric’ or ‘Glue’ of society. In a sense, each of us is an agent of the Sympathetic Intelligence thread, or perhaps each of us is a needle, through which that thread is threaded and with which we weave our place in society.

            </TextSection>
        </Section>
    )
}
export default Socioneurological
