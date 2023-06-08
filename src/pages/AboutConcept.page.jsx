import { useState, useEffect } from "react"
import { OutlinedHeader, SectionHeader, TextSection } from "../components/custom.library"
import { GroupOfPeople, MainSVG } from "../resources/svg/homeSVG.library"
import { Tier1, Tier2, Tier3 } from "../resources/svg/tierSVG.library"
import gsap from 'gsap'

const Blank = ({className}) => {
    return <div className={`${className}`}></div>
}

const tierData = {
    tier0:{
        svg:Blank,
        title:'Hover over the graphic to find out more about the tiers. Then click on any tier to learn more about that tier!',
        content:<> </>
    },
    tier1:{
        svg:Tier1,
        title:'Tier 1 - Intrapersonal/Within',
        content:<>
            Sympathetic Intelligence at the individual level, relies on the 
            3 primary intelligence faculties of Gut, Mind and Heart. The SI 
            sense and response capacity is determined by the brain's capacity 
            to integrate these three primary intelligences into one simultaneous 
            behavior. Using this Executive capability we process stimuli 
            prompted senses and convert them into feelings that are either 
            instinctual, cognitive or emotional, which we then rely upon to 
            respond in a cohesive manner that is In Sympathy with the context 
            of our surroundings. The integration is seamless, spontaneous and 
            continual and focused on returning behavior that is appropriate 
            and assures life quality on a continuum from survival to optimal.
        </>
    },
    tier2:{
        svg:Tier2,
        title:'Tier 2 - Interpersonal/Between',
        content:<>
            Sympathetic Intelligence at this level is driven by a survivalist 
            Need, Desire and Capacity to belong or be connected by the 
            individual, but extends intelligence beyond the individual 
            and is said to be within, between and amongst all of us. It 
            starts with person-to-person engagement and builds to an 
            ever-strengthening attachment with those immediately around 
            each individual extending to a social network as we become 
            members of groups such as partnerships, teams and communities. 
            We first match, then connect and bond. Sympathetic Intelligence 
            at this level becomes a multi-layered Collective phenomenon that 
            manifests in a multitude of ways from flow states visible in teams 
            to the vibes felt in audiences.
        </>
    },
    tier3:{
        svg:Tier3,
        title:'Tier 3 - Extrapersonal/Amongst',
        content:<>
            Sympathetic Intelligence at this level is visible in 
            the day to day activities of societies through their 
            cultures, conformity and compliance through common 
            purpose, adherence to standards and norms, including 
            the rules and laws of order necessary for a community 
            to execute on the social contract deeply embodied in 
            our communal existence. At this level it is not 
            possible for it to present in collective spontaneous 
            behavior, but can present as a sense of national pride 
            or togetherness visible during certain special 
            occasions. We rely on this level of Sympathetic 
            Intelligence as we Live, Learn and Work.
        </>
    }
}

const AboutConcept = () => {
    const [tier,setTier] = useState(0)
    const [hover,setHover] = useState()
    const SectionSVG = tier?Blank:tierData[`tier${tier}`].svg

    const getTier = () => hover?hover:tier

    useEffect(() => {
        gsap.fromTo("#main-svg",{
            scale:0
        },{
            scale:1
        })

        gsap.fromTo("#header",{
            opacity:0
        },{
            opacity:1,
            duration:1
        })

        gsap.fromTo("#main-section",{
            opacity:0
        },{
            opacity:1,
            duration:1
        })
    },[])

    return (
        <div>
            <div className="w-11/12 mx-auto relative">
                <OutlinedHeader id="header">
                    Depthfullness
                </OutlinedHeader>
                <div className="md:flex py-8">
                    <div className="md:w-1/2 -translate-x-10 md:mx-0 mx-auto" id="main-svg">
                        <MainSVG tier={getTier()} setTier={setTier} setHover={setHover}/>
                    </div>
                    <div className={`flex md:w-3/5 items-start ${getTier()?'opacity-100':'opacity-0'}`} id="main-section">
                        <SectionSVG className="w-1/12" />
                            <div className={`w-11/12 px-4 transition-all`}>
                                <SectionHeader className="text-white">
                                    {tierData[`tier${getTier()}`].title}
                                </SectionHeader>
                                <br/>
                                <TextSection className="text-white">
                                    {tierData[`tier${getTier()}`].content}
                                </TextSection>
                                {getTier()?(
                                    <>
                                        <GroupOfPeople partition={getTier()} />
                                    </>
                                ):(<></>)}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutConcept
