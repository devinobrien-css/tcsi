import gsap from "gsap"
import { useEffect } from "react"
import { ExpandableTextSection, OutlinedHeader, SectionHeader, TextSection } from "../../components/custom.library"




export const TierThree = () => {
    useEffect(() => {
        gsap.fromTo("#tier-section",{
            opacity:0
        },{
            opacity:1,
            duration:1.5
        })
    },[])

    return (
        <div id="tier-section">
            <SectionHeader>Tier 3 - Extrapersonal / Amongst / Community</SectionHeader>
            <br/>
            <TextSection>
                Sympathetic Intelligence at this level is visible in the day to day
                activities of societies through their cultures, conformity and 
                compliance through common purpose, adherence to standards and norms, 
                including the rules and laws of order necessary for a community to 
                execute on the social contract deeply embodied in our communal 
                existence. At this level it is not possible for it to present in 
                collective spontaneous behavior, but can present as a sense of 
                national pride or togetherness visible during certain special 
                occasions. We rely on this level of Sympathetic Intelligence as we 
                Live, Learn and Work.
            </TextSection>
            <br/>
            <OutlinedHeader>live</OutlinedHeader>
            <ExpandableTextSection>
                This can be thought of as the social element of these three tiers. We are born into a family and it is here that we first learn the skills of mixing with people and forming bonds. This is our close knit relationships - our 'kinship' as it were. Here we have family, friends and eventually we meet our spouse and grow our own family. 
            </ExpandableTextSection>
            <br/>
            <OutlinedHeader>learn</OutlinedHeader>
            <ExpandableTextSection>
                This is where we learn to adapt to the more external element of our social existence. Here we learn our culture and accepted norms. 
            </ExpandableTextSection>
            <br/>
            <OutlinedHeader>work</OutlinedHeader>
            <ExpandableTextSection>
                We build on what we have developped in the two other tiers to engage and integrate as fully as possible with our work environment. 
            </ExpandableTextSection>
            <br/>
            <br/>
        </div>
    )
}
