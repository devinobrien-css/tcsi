import { SectionHeader, TextSection } from "../components/custom.library"
import { OriginOneSVG, OriginThreeSVG, OriginTwoSVG } from "../resources/svg/originsSVG.library"


const Origins = () => {

    return (
            <>
                <div className="md:flex h-min">
                    <div className="flex justify-between md:mt-0 mt-10 md:w-3/12">
                        <div className="my-auto w-4/12 md:w-full">
                            {OriginOneSVG}
                        </div>
                        <div className="md:hidden block w-4/12">
                            {OriginTwoSVG}
                        </div>
                    </div>
                    <div className="md:w-5/12 px-4">
                        <SectionHeader>Origins</SectionHeader>
                        <TextSection>
                            The origins of the concept lie in the experience of 
                            a drummer with an Irish indie rock band who over the 
                            course of several years, while the band went from 
                            obscurity to small community had a very unique 
                            perspective of the world from his vantage point 
                            on a drum stool behind his bandmates and their 
                            audience. Every show, had highlights when the mood, 
                            vibe or atmosphere of the entire venue became almost 
                            palbable - these moments were very powerful and left
                            him spell bound. They were moments when it appeared 
                            to him that the entire audience was so completely 
                            connected, that everyone was having what he came 
                            to call a collective epiphany. He called it 
                            'epiphanicism'. 
                            <br/> 
                            <br/> 
                            The reason he was so captivated
                            by it, was that he could literally feel how it 
                            appeared to have its roots in him - the source 
                            seemed to come from the rhythm he was playing. 
                            Then the degree to which he and the other members 
                            of his band were locked in to each others playing 
                            cemented the effect and then finally the level of 
                            synchronicity between the band and the audience 
                            sealed the levels of connectivity between everyone 
                            in the venue. These three layers of connectivity 
                            he felt all led back finally to what he concluded 
                            was the collective Sympathetic Intelligence of each 
                            individual in the venue, and explained this powerful
                            sense of unity - it was compelling to him that 
                            everyone could actually feel it. The impact of 
                            those moments was nothing short of AWESOME!
                        </TextSection>
                    </div>
                    <div className="md:block hidden w-3/12">
                        {OriginTwoSVG}
                    </div>
                </div>
                <div className="md:-mt-44">
                    {OriginThreeSVG}
                </div>
            </> 
    )
}
export default Origins