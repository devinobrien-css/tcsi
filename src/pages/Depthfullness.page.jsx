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
                Depthfulness
As should be clear from all of the above - Sympathetic Intelligence is an indelible part of who we are and
how we behave. We all have the capacity for Sympathetic Intelligence and Its presence is ubiquitous.
However, what should also be clear from our enumeration of the various parameters above - exercising
Sympathetic Intelligence is a challenge.
Depthfulness is a means of developing the capacity to overcoming that challenge and apply our
Sympathetic Intelligence to greater effect, and with greater benefit to all whom we come in contact with.
Depthfulness, is the acquisition and application of an optimized Sympathetic Intelligence. Depthfulness is
two things - First, it is a concept, and Second it is an acquired ability. The purpose behind training in
Sympathetic Intelligence is to acquire the latter through understanding the former.
The concept is found in the structure of Sympathetic Intelligence and the manner in which our individual
mechanisms interface with that framework. At the Center for Sympathetic Intelligence, we believe that
to the extent any individual can contemplate, become aware of and embrace the concept, then to that
extent they will acquire depthfulness and be able to better engage their own capacity for Sympathetic
Intelligence. So, concept plus training brings an awareness, which leads to acquired ability and in the
result, they will be better connected to each moment and better able to influence each moment both
positively and constructively.
        
So, depthlessness is a way of taking control of our capacity for Sympathetic Intelligence - it is a learned,
disciplined skill unto itself. It brings awareness of the self in the moment BUT, from the perspective of
the context. While mindfulness means focussing on the self in context, depthfulness means focusing on
the context with the self in it. Mindfulness is a passive acceptance of the current circumstances, while
depthfulness is an active and willful engagement with the context. Police officers who develop it, will no
longer just be thinking from the inside out - they will be thinking from the outside in. Depthfulness is
deployed both contemplatively in training and preemptively in day to day operations. Depthfulness helps
us more appropriately align our Sympathetic Intelligence with the changing circumstances as they unfold from moment to moment, allowing us to connect with each moment in accordance with the specifics of
each new moment, and the specific context.
        
Training for improved Sympathetic Intelligence means studying, contemplating and practicing the
characteristics of Sympathetic intelligence - understanding the Tiers, the relationship between them and
the application and operation of all of the parameters outlined above. We believe that the awareness gained and the ability to act on that awareness will empower those who receive the training to use their
sympathetic intelligence to greater effect in delivering on their promise to serve and protect their
community. From the diagram above, we can see that the majority of components are present in each
tier and that Sympathetic Intelligence through Depthfulness is the pathway to an operational form of
Collective Intelligence.
            </TextSection>
        </Section>
    )
}
export default Depthfullness
