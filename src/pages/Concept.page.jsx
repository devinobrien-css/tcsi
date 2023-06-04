import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TierButton } from "./Concept.library/tierButton.component"
import { tierReferences } from "../manifest"
import gsap from "gsap"
import { Icon } from "@iconify/react"

/** Concept page
 * @returns the concept section breaking down each tier
 */
const Concept = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [tab,setTab] = useState(params.tier||"tier1")
    useEffect(() => {
        setTab(params.tier||"tier1")
    },[params])

    useEffect(()=>{
        gsap.fromTo("#concept-svg",{
            opacity:0
        },{
            opacity:1

        })

        gsap.fromTo("#concept-ad-video",{
            scale:0
        },{
            scale:1

        })
    },[])

    const CurrentTier = tierReferences[tab].page
    const CurrentSVG = tierReferences[tab].svg

    return (
        <div className="flex overflow-clip relative">
            <div className="absolute top-2 left-1/4 text-white flex cursor-pointer" onClick={()=>navigate('/about-concept')}>
                <Icon icon="bx:left-arrow" className="my-auto block"/>
                <p className="my-auto hover:underline"> Explore the concept</p>
            </div>
            <div className="w-2/5 max-h-full absolute opacity-50 md:hidden" id="concept-svg">
                <CurrentSVG />
            </div>
            <div className="w-3/12 md:block hidden" id="concept-svg">
                <CurrentSVG />
            </div>
            <div className="text-white px-2 mt-8 md:w-5/12 z-50">
                <div className="mt-8 p-4 md:p-0">
                    <div className="border-b-2 border-gray-300">
                        <TierButton tab={tab} tier="tier1">
                            Tier 1 <br/> 
                            <b>Intrapersonal</b>
                        </TierButton>
                        <TierButton tab={tab} tier="tier2">
                            Tier 2 <br/> 
                            <b>Interpersonal</b>
                        </TierButton>
                        <TierButton tab={tab} tier="tier3">
                            Tier 3 <br/> 
                            <b>Extrapersonal</b>
                        </TierButton>
                    </div>
                    <br/>
                    <CurrentTier />
                </div>
            </div>
            <div className="pl-8 mt-12 md:block hidden" id="concept-ad-video">
                <a href="https://www.youtube.com/watch?v=NmiwAV9i5cY" className="bg-white block h-min rounded-lg overflow-clip hover:scale-105 transition-all transform cursor-pointer">
                    <object data="https://www.youtube.com/embed/NmiwAV9i5cY" width='100%'>
                    </object>
                    <p className="p-2 font-lato text-gray-700">Learn The Meaning of Sympathy</p>
                </a>
            </div>
        </div>

    )
}
export default Concept