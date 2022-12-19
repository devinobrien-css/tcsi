import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TierButton } from "../components/Concept.library/tierButton.component"
import { SectionHeader, TextSection } from "../components/custom.library"
import { tierReferences } from "../manifest"

/** Concept page
 * @returns the concept section breaking down each tier
 */
const Concept = () => {
    const params = useParams()
    const [tab,setTab] = useState(params.tier||"tier1")
    useEffect(() => {
        setTab(params.tier||"tier1")
    },[params])

    const CurrentTier = tierReferences[tab].page
    const CurrentSVG = tierReferences[tab].svg

    return (
        <div>
            <div className="flex">
                <div className="w-3/12">
                    <CurrentSVG />
                </div>
                <div className=" px-2 mt-8 w-5/12">
                    <div className="mt-8">
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
                        <CurrentTier />
                    </div>
                </div>
                <div>
                    video here
                </div>
            </div>
        </div>
    )
}
export default Concept