import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"
import { CenterNav } from "./CenterNav.component"
import { ConceptNav } from './ConceptNav.component'

/** Main navigation bar
 * @returns a nav bar on the top of the page
 */
const Nav = ({ type }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className={`z-[499] ${type==='concept'?'backdrop-blur-md':'bg-white'} justify-between shadow-lg fixed right-0  transition-all duration-2500 w-full`}>
                <div className="bg-black flex justify-end p-1">
                    <p 
                        className="text-white underline font-light cursor-pointer"
                        onClick={() => type==='concept'?navigate('/about'):navigate('/about-concept')}
                    >        
                        {type==='concept'?'Visit the Center for SI':'Explore the Concept of SI'}
                    </p>
                    <Icon 
                        icon="fa-solid:home" 
                        className="shrink-0 text-white my-auto mx-3 cursor-pointer" 
                        onClick={() => navigate('/')}
                    />
                </div>

                {
                    type==='concept'?(
                        <ConceptNav />
                    ):(
                        <CenterNav />
                    )
                }
                

            </div>

            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}
export default Nav