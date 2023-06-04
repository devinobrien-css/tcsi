import gsap from "gsap"
import { useEffect } from "react"
import { ExpandableTextSection, OutlinedHeader, SectionHeader, TextSection } from "../../components/custom.library"




export const TierTwo = () => {
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
            <SectionHeader>Tier 2 - Interpersonal/Between</SectionHeader>
            <TextSection>
                Sympathetic Intelligence at this level is driven by a 
                survivalist Need, Desire and Capacity to belong or be connected
                by the individual, but extends intelligence beyond the 
                individual and is said to be within, between and amongst all 
                of us. It starts with person-to-person engagement and builds 
                to an ever-strengthening attachment with those immediately 
                around each individual extending to a social network as we 
                become members of groups such as partnerships, teams and 
                communities. We first match, then connect and bond. 
                Sympathetic Intelligence at this level becomes a multi-layered 
                Collective phenomenon that manifests in a multitude of ways 
                from flow states visible in teams to the vibes felt in 
                audiences.
            </TextSection>
            <br/>
            <OutlinedHeader>match</OutlinedHeader>
            <ExpandableTextSection>
                Driven by our individual desire to belong, when we meet others, we strive to match ourselves by our behavior with them. We can sense the degree to which we are succeeding and we self correct in the moment to conduct ourselves in a like manner with them. If for example we are in a new environment and those around us are familiar with this environment, we will strive to 'match or copy' their behavior in a bid to fit in.
            </ExpandableTextSection>
            <br/>
            <OutlinedHeader>connect</OutlinedHeader>
            <ExpandableTextSection>
                To the extent we are successful in matching the behavior of those around us, we will be able to blend in, and as we blend in we become ever and more increasingly connnected to those around us. We become as familiar as the furniture in the room and those around us are pleased that are presence is felt. 
            </ExpandableTextSection>
            <br/>
            <OutlinedHeader>bond</OutlinedHeader>
            <ExpandableTextSection>
               Now that we are as accepted in the environment as the furniture, we become a part of the context - we are bonded to those around in relationships such as work colleagues or closer as in friendship. Of course the context will play a role in determining what kind of bonds are created and the strentght of them.
            </ExpandableTextSection>
            <br/>
            <br/>
        </div>
    )
}
