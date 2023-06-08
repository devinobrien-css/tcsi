import { Icon } from "@iconify/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CenterNav } from "./CenterNav.component"
import { ConceptNav } from './ConceptNav.component'
import { MobileNav } from "./MobileNav.component"

/** Main navigation bar
 * @returns a nav bar on the top of the page
 */
const Nav = ({ type }) => {
    const navigate = useNavigate()
    const [modal,setModal] = useState(false)

    const Burger = () => {
        return (
            <div className={`shadow m-1 bg-white bg-opacity-60 text-gray-700 h-min my-auto rounded-lg md:hidden ${modal?'hidden':''}`} onClick={()=>setModal(true)}>
                <Icon icon="radix-icons:hamburger-menu" width="50" />
            </div>
        )
    }

    return (
        <>
            <MobileNav open={modal} setOpen={setModal}/>
            <div className={`z-[499]  ${type==='concept'?'backdrop-blur-md':'bg-white'} justify-between shadow-lg fixed right-0  transition-all duration-2500 w-full`}>
                <div className="bg-black flex justify-center p-2">
                    <p 
                        className={` underline font-light cursor-pointer flex ${type==='concept'?'text-white':'text-gray-400'}`}
                        onClick={() => type==='concept'?navigate('/center-home'):null}
                    >       
                        <Icon icon="bx:left-arrow" className="my-auto block"/> 
                        <span className="my-auto">Visit the Center for SI</span>
                    </p>
                    <Icon 
                        icon="fa-solid:home" 
                        className="shrink-0 text-white my-auto mx-3 cursor-pointer" 
                        onClick={() => navigate('/')}
                    />
                    <p 
                        className={`text-white underline font-light cursor-pointer flex ${type==='concept'?'text-gray-400':'text-white'}`}
                        onClick={() => type==='concept'?null:navigate('/about-concept')}
                    >        
                        <span className="my-auto">Explore the Concept of SI</span>
                        <Icon icon="bx:left-arrow" className="my-auto block rotate-180"/> 
                    </p>
                </div>

                <div>
                {
                    type==='concept'?(
                        <ConceptNav Burger={Burger}/>
                    ):(
                        <CenterNav Burger={Burger}/>
                    )
                }
                </div>
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