import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Note, Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Panels = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-black bg-opacity-70 fixed  left-16 top-40 md:py-4 p-0 overflow-hidden md:w-1/6 w-0 rounded ">
                <p className="bg-tcsi-green my-2 px-4 py-2 text-lg w-4/5 cursor-pointer"
                    onClick={()=>navigate('/panels/police')}>Police Panel</p>
                <p className="bg-tcsi-yellow my-2 px-4 py-2 text-lg w-4/5 cursor-pointer"
                    onClick={()=>navigate('/panels/arts')}>Arts Panel</p>
                <p className="bg-red-500 my-2 px-4 py-2 text-lg w-4/5 cursor-pointer"
                    onClick={()=>navigate('/panels/education')}>Education Panel</p>
                <p className="bg-tcsi-blue my-2 px-4 py-2 text-lg w-4/5 cursor-pointer text-white"
                    onClick={()=>navigate('/panels/healthcare')}>Healthcare Panel</p>
            </div>

            <div className="bg-black bg-opacity-70 left-16 top-40 w-full overflow-x-scroll rounded flex md:hidden sm:mt-12">
                <p className="bg-tcsi-green my-2 p-4 text-lg w-4/5 cursor-pointer"
                    onClick={()=>navigate('/panels/police')}>Police</p>
                <p className="bg-tcsi-yellow my-2 p-4 text-lg w-4/5 cursor-pointer"
                    onClick={()=>navigate('/panels/arts')}>Arts</p>
                <p className="bg-red-500 my-2 p-4 text-lg w-4/5 cursor-pointer"
                    onClick={()=>navigate('/panels/education')}>Education</p>
                <p className="bg-tcsi-blue my-2 p-4 text-lg w-4/5 cursor-pointer text-white"
                    onClick={()=>navigate('/panels/healthcare')}>Healthcare</p>
            </div>
            {
                location.pathname.split('/').length>2?(
                    <Outlet />
                ):(
                    <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
                        <SectionHeader className="text-tcsi-lightblue">
                            Panels
                        </SectionHeader>
                        <TextSection>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Iure dolorem nemo cum consequuntur, incidunt vero odio 
                            harum voluptates qui, totam repellat! Obcaecati iusto, beatae 
                            ab esse ipsam perferendis, modi unde architecto 
                            fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                            eum sint deleniti.
                        </TextSection>
                        <Note>
                            Here's an example of a note
                        </Note>
                    </Section>
                )
            }
        </>
    )
}
export default Panels