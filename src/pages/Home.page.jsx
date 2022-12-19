import { OutlinedHeader, SectionHeader } from "../components/custom.library"
import { MainSVG } from "../resources/svg/homeSVG.library"
import { Tier1, Tier2, Tier3 } from "../resources/svg/tierSVG.library"


const tierData = {
    tier1:{
        svg:Tier1
    },
    tier2:{
        svg:Tier2
    },
    tier3:{
        svg:Tier3
    }

}

const Home = () => {
    const SectionSVG = tierData.tier1.svg

    return (
        <div>
            <div className="w-10/12 mx-auto relative">
                <OutlinedHeader>
                    Depthfullness
                </OutlinedHeader>
                <SectionHeader>
                    Sympathetic Intelligence
                </SectionHeader>
                <div className="flex">
                    <div className="border w-1/2">

                        <MainSVG />
                    </div>
                    <div>
                        <SectionSVG />

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home