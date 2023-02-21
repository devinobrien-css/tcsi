import { Icon } from "@iconify/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavMultiTab, NavTab } from "./NavTab.components"

export const MobileNav = () => {
    const [open,setOpen] = useState()
    const navigate = useNavigate()
    return(
        <>
            <button className="text-white md:w-0 transition-all">
                <Icon 
                    icon={"charm:menu-hamburger"} 
                    width="50" 
                    onClick={()=> open?setOpen():setOpen(true)}
                />
            </button>
            <div  className={`z-[500] absolute overflow-hidden transition-all duration-[800ms] top-0 right-0 ${open?'w-full h-full opacity-100':'w-0 h-0 opacity-0'} bg-gradient bg-cover bg-no-repeat`}>
                <button 
                    className="absolute top-2 right-2 text-white" 
                    onClick={()=>setOpen()}
                >
                    <Icon icon={"ph:x-circle-bold"} width="50"/>
                </button>
                <nav 
                    className="flex flex-col items-center text-gray-200 text-lg justify-between transition-all" 
                    onClick={()=>{
                    
                    }}
                >
                    <NavTab path="/" title="about" onClick={() => {setOpen()}}/>
                    <NavTab path="/origins" title="origins" onClick={() => {setOpen()}}/>
                    <NavMultiTab path="/concept" title="concept" tabs={experimentsMultiTab} setNavOpen={setOpen} />
                    <NavMultiTab path="/depthfullness" title="Explore" tabs={exploreMultiTab} setNavOpen={setOpen}/>
                    <NavTab path="/applications" title="applications" onClick={() => {setOpen()}}/>
                    <NavTab path="/videos" title="videos" onClick={() => {setOpen()}}/>
                    <NavTab path="/experience" title="experience SI" onClick={() => {setOpen()}}/>
                </nav>
                <MainSVG className="absolute"/>
            </div>
        </>
    )
}