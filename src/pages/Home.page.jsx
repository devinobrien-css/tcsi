import { useNavigate } from "react-router-dom"
import { CircleSVG, WhiteCirclesSVG } from "../resources/svg/homeSVG.library"
import { Icon } from "@iconify/react"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="md:flex">
            <div className="bg-tcsi-dark-green md:w-1/2 md:h-screen z-[100] relative overflow-hidden flex pb-48">
                <WhiteCirclesSVG  className="absolute top-10 translate-x-[75%]"/>
                <div className="w-full mx-auto my-auto py-8">
                    <div className="mx-auto w-fit pr-8">
                        <p className="ml-4 text-xl"><span className="text-4xl">visit</span> the</p>
                        <p className="text-xl">Center for <span className="text-4xl">Sympathetic Intelligence</span></p>
                    </div>

                    <div className="bg-white md:w-10/12 py-10 md:pl-20 md:pr-4 px-4 my-6">
                        <p className="text-lg">
                            The Center for Sympathetic Inteligence brings together scientists and engineers 
                            from academia and industry in collaborative partnerships to tackle important 
                            research questions related to the concept of Sympathetic Intelligence and 
                            its applications.
                        </p>
                    </div>
                    <div className="flex justify-evenly w-10/12 text-lg font-light font-roboto">
                        <p>About Us</p>
                        <p>Our Mission</p>
                        <p>Panels</p>
                        <p>Publications</p>
                        <p>Donate</p>
                        <p>Contact</p>
                    </div>

                    <Icon 
                        icon="gg:play-button" 
                        className="text-white rounded-full bg-white bg-opacity-30 my-8 border mx-auto cursor-pointer hover:scale-105 transition-all" 
                        width="90"
                        onClick={()=>{
                            navigate('/about')
                        }}
                    />

                </div>
            </div>
            <div className="md:w-1/2 mx-auto relative ">
                <div className="-translate-x-[25%] translate-y-[25%] w-[120%]">
                    <CircleSVG className="rounded-full float-left w-3/6" style={{shapeOutside:'circle()'}}/>
                    <div className="w-full pt-16">
                        <p className="text-xl"><span className="text-4xl">explore</span> the concept of</p>
                        <p className="text-4xl">Sympathetic Intelligence</p>
                        <div className="my-12 font-light font-roboto text-lg">
                            <p className="float-left mx-2 text-lg cursor-pointer hover:underline" onClick={()=>navigate('/origins')}>Origins</p>
                            <p className="float-left mx-2 text-lg cursor-pointer hover:underline" onClick={()=>navigate('/concept')}>The Tiers</p>
                            <p className="float-left mx-2 text-lg cursor-pointer hover:underline" onClick={()=>navigate('/applications')}>Applications</p>
                            <p className="float-left mx-2 text-lg cursor-pointer hover:underline" onClick={()=>navigate('/videos')}>Videos</p>
                            <p className="float-left mx-2 text-lg cursor-pointer hover:underline" onClick={()=>navigate('/experiments')}>Experiments</p>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <p className="text-lg">
                            Sympathetic Intelligence is an innate regulatory
                            sense and response mechanism which each of us has
                            and which binds us all together as a species.
                            It is present at that point of inflection which is 
                            at the center of every human transaction, the 
                            measure of which is seen in the degree of care 
                            exhibited by our behavior and the result of which
                            can be a better society for all.
                        </p>


                        <Icon 
                            icon="gg:play-button" 
                            className="text-white rounded-full bg-white bg-opacity-10 border mx-auto cursor-pointer hover:scale-105 transition-all" 
                            width="90"
                            onClick={()=>{
                                navigate('/about-concept')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home