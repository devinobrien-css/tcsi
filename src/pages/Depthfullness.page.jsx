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
The Application of Sympathetic Intelligence
<br/> 
<br/>
Sympathetic Intelligence is an indelible part of who we are and how we behave. We all have the capacity for Sympathetic Intelligence and its presence is ubiquitous. However, perhaps because Sympathetic Intelligence is so much a part of who we are and how we are, exercising Sympathetic Intelligence consciously or deliberately presents as a challenge.
 
Depthfulness is an approach that we are developing here at the Center to overcome that challenge. The goal is to create a means and capacity so that individuals may be able to bring their natural Sympathetic Intelligence into their daily lives in a manner that will have greater effect, and bring greater benefit to all whom they come into contact with. We believe that if we can deliver this refined human ability to bear in professional environments we can bring an immediate benefit to all of our lives. This is why at the outset we have created three core panels:- Education, Healthcare and Policing.
<br/> 
<br/>
What is Depthulness<br/> <br/>
Depthfulness is the Individual's awareness of and for Sympathetic Intelligence and all of its Tiers. Depthfulness, is the acquisition and application of an individual's optimized Sympathetic Intelligence. Therefore it is an ability that can be acquired.
 
The purpose behind training in Sympathetic Intelligence is to acquire Depthfulness through understanding Sympathetic Intelligence. That is because the concept of Depthfulness is found in the structure of Sympathetic Intelligence and the manner in which our individual mechanisms interface with that framework. 
 
At the Center for Sympathetic Intelligence, we believe that to the extent any individual can contemplate, become aware of and embrace the concept of Sympathetic Intelligence, then to that extent they will acquire Depthfulness and be able to better engage their own capacity for Sympathetic Intelligence. 
<br/> 
<br/> 
What is Depthulness Training
Stated simply, training brings an awareness, which leads to an acquired ability and in the result, each individual will be better connected to each moment and better able to influence each moment both positively and constructively.
 
So, Depthfulness Training is a way to facilitate the individual taking control of their individual capacity for Sympathetic Intelligence - it is a learned, disciplined skill unto itself. It brings awareness of the self in the moment BUT, from the perspective of the context. 
 
We find that a useful way to understand Depthfulness is to compare or relate it to Mindfulness. For the purposes of this comparison, Mindfulness means focusing on the self in context, while Depthfulness means focusing on the context with the self in it. Mindfulness is a passive acceptance of the current circumstances, while Depthfulness is an active and willful engagement with the context. Professionals and others who develop it, will no longer just be thinking from the inside out - they will also be thinking from the outside in. 
 
Depthfulness is deployed both contemplatively in training and preemptively in day to day operations. Depthfulness helps us more appropriately align our Sympathetic Intelligence with the changing circumstances as they unfold from moment to moment, allowing us to connect with each moment in accordance with the specifics of each new moment, and the specific context.
        
Training for improved Sympathetic Intelligence means studying, contemplating and practicing the characteristics of Sympathetic intelligence - understanding the Tiers, the relationship between them and the application and operation of all of the parameters outlined above. 
 
We believe that the awareness gained and the ability to act on that awareness will empower those who receive the training to use their sympathetic intelligence to greater effect in delivering on their promise to serve and protect their community. 
 
From the point of view of a Community or an Institution - Depthfulness is the pathway to an operational form of Collective Intelligence.

            </TextSection>
        </Section>
    )
}
export default Depthfullness
