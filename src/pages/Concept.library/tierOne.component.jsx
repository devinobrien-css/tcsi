import gsap from "gsap"
import { useEffect } from "react"
import { ExpandableTextSection, OutlinedHeader, SectionHeader, TextSection } from "../../components/custom.library"




export const TierOne = () => {

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
            <SectionHeader>Tier 1 - Intrapersonal/Within</SectionHeader>
            <TextSection>
                Sympathetic Intelligence at the individual level, is the Need, 
                Capacity and Desire to be in sympathy with our environment. 
                It relies on the 3 primary intelligence faculties of Gut, Mind 
                and Heart. The SI sense and response capacity is determined by 
                the brain's capacity to integrate these three primary 
                intelligences into one simultaneous response and behavior. 
                Using this Executive capability we process stimuli prompted 
                senses and convert them into feelings that are either 
                instinctual, cognitive or emotional, which we then rely upon 
                to respond in a cohesive manner that is In Sympathy with the 
                context of our surroundings. The integration is seamless, 
                spontaneous and continual and focused on returning behavior 
                that is appropriate and assures life quality on a continuum 
                from survival to optimal.
            </TextSection>
            <br/>
            <OutlinedHeader>gut</OutlinedHeader>
            <ExpandableTextSection>
                By 'Gut' of course we mean 'Instinct'. Each of us has innate and primal motivators that are designed to cause us to interpret and then react according to 'programmed' responses. For example, we feel hungry, or we feel tired. In either case we react by taking action. We eat, or we go to bed. There is a huge variety of instincts, all designed to help each of us to succeed, but here too we have a motivator that his designed to help the species succeed. This is very important as it establishes a key distinguisher between Symathetic Intelligence, and other 'intelligences'. SI is not just about 'you' - it is also about 'Us'!!
            </ExpandableTextSection>
            <br/>
            <OutlinedHeader>mind</OutlinedHeader>
            <ExpandableTextSection>
                By 'Mind' we mean 'Cognition' or 'Reason'. Each of us has the capacity to contemplate any portion of our existence from a completely rational basis. We can 'Calculate' from a cold determination of the facts in front of us and make predicitions or projections. Again, this is a capacity we have that will help us survive. But, now we also have the capacity for conflict - in other words how do our projections fit with our innate motivators? We are hungry, but does our reason determine that there is a risk involved in making the effort to address our hunger in the circumstances? Further still - is the risk worth taking?
            </ExpandableTextSection>
            <br/>
            <OutlinedHeader>heart</OutlinedHeader>
            <ExpandableTextSection>
                Pascal famously said - 'The heart has reason of which the mind does not know'. Here we are concerned with our individual emotions, a different set of feelings that have to do with our 'state' of being, or perhaps better stated - our sense of our state of being. Here are some of the primary emotions;- Sadness, Hapiness, Fear, Anger, Disgust, Surprise and Regret. Over the years academics have created an ever and increasingly larger set of 'emotions', each being ever more nuanced and addressing ever more sophisticated forms of feelings.   
            </ExpandableTextSection>
            <br/>
            <br/>
        </div>
    )
}
