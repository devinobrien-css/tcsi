import { useNavigate } from "react-router-dom"
import { CircleSVG, WhiteCirclesSVG } from "../resources/svg/homeSVG.library"
import { Icon } from "@iconify/react"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="md:flex">
            <div className="bg-tcsi-dark-green md:w-1/2 md:h-screen min-h-full z-[100] relative overflow-hidden flex">
                <WhiteCirclesSVG  className="absolute top-6 z-0 translate-x-[73%] block md:hidden h-fit"/>
                
                <WhiteCirclesSVG  className="absolute top-2 translate-x-[75%] z-0 md:block hidden"/>

                <div className="md:w-9/12  my-auto">
                    <div className="mx-auto w-fit p-2 md:pr-8 z-[500] md:block hidden">
                        <p className="ml-4 text-xl font-light"><span className="text-4xl font-light">visit</span> the</p>
                        <p className="text-xl font-light">Center for <span className="text-4xl font-light">Sympathetic Intelligence</span></p>
                    </div>


                    <div className="mx-auto w-fit p-4 z-[1000] block md:hidden">
                        <p className="text-3xl font-light py-6 z-[1000]">visit the Center for Sympathetic Intelligence</p>
                    </div>


                    <div className="bg-white bg-opacity-40 py-12 md:pl-20 md:pr-4 px-4 md:my-6 ">
                        <Icon 
                            icon="gg:play-button" 
                            className="text-white rounded-full bg-opacity-80 border mx-auto cursor-pointer hover:scale-105 transition-all block md:hidden -mt-16 -translate-y-2 z-[500] bg-tcsi-green" 
                            width="70"
                            onClick={()=>{
                                navigate('/center-home')
                            }}
                        />
                        <p className="text-lg">
                            The Center for Sympathetic Inteligence brings together scientists and engineers 
                            from academia and industry in collaborative partnerships to tackle important 
                            research questions related to the concept of Sympathetic Intelligence and 
                            its applications.
                        </p>
                    </div>

                    {/* <div className="flex-wrap justify-evenly w-10/12 text-lg font-light font-roboto [&>*]:mx-1 mx-auto md:flex hidden">
                        <p>About Us</p>
                        <p>Our Mission</p>
                        <p>Panels</p>
                        <p>Publications</p>
                        <p>Donate</p>
                        <p>Contact</p>
                    </div> */}

                    <Icon 
                        icon="gg:play-button" 
                        className="text-white rotate-180 rounded-full bg-white bg-opacity-30 my-8 border mx-auto cursor-pointer hover:scale-105 transition-all md:block hidden" 
                        width="90"
                        onClick={()=>{
                            navigate('/about')
                        }}
                    />
                </div>
            </div>
            <div className="md:w-1/2 mx-auto flex flex-col">
                <div className="top-[7em] left-[33em] md:w-[35%] absolute opacity-60">
                    <CircleSVG className="rounded-full float-left md:block hidden" style={{shapeOutside:'circle()'}}/>
                </div>

                <div className="my-auto flex justify-end">
                    <div className="md:w-9/12 my-auto  md:text-black font-light">
                        <div className="md:block hidden w-fit ml-24">
                            <p className="text-xl font-light"><span className="text-4xl font-light">explore</span> the concept of</p>
                            <p className="pl-8 text-4xl font-light">Sympathetic Intelligence</p>
                        </div>

                        <div className="block md:hidden my-10">
                            <p className="text-3xl text-center">Explore the concept of Sympathetic Intelligence</p>
                        </div>

                        <div className="bg-white bg-opacity-40 py-10 px-6 md:my-6">
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
                        </div>

                        <Icon 
                            icon="gg:play-button" 
                            className="text-white rounded-full bg-white bg-opacity-10 border mx-auto cursor-pointer hover:scale-105 transition-all md:block hidden z-[1000]" 
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