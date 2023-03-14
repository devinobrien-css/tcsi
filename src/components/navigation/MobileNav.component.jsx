import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"

export const MobileNav = ({open,setOpen}) => {
    const navigate = useNavigate()
    return(
        <div className={`absolute w-screen h-screen bg-white bg-opacity-90 flex transition-all z-[5000] ${open?'opacity-100':'opacity-0 scale-0'}`}>
            <div  className={`bg-white w-[90%] h-fit mx-auto my-auto overflow-scroll relative transform transition-all ${open?'scale-100':'scale-0'}`}>
                

                <div className="bg-gray-300 p-4 text-lg text-tcsi-navy flex justify-between">
                    <p>The Center for Sympathetic Intelligence</p>

                    <button 
                        className="text-tcsi-navy" 
                        onClick={()=>setOpen()}
                    >
                        <Icon icon={"ph:x"} width="35"/>
                    </button>
                </div>
                <div className="p-4">
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/about")
                        setOpen()
                    }}>About Us</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/about")
                        setOpen()
                    }}>Our Mission</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/panels")
                        setOpen()
                    }}>Panels</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/publications")
                        setOpen()
                    }}>Publications</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/donations")
                        setOpen()
                    }}>Donate</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/contact")
                        setOpen()
                    }}>Contact</p>
                </div>

                <div className="bg-gray-300 p-4 text-lg text-tcsi-navy">
                    <p>The Concept of Sympathetic Intelligence</p>
                </div>
                <div className="p-4">
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/concept")
                        setOpen()
                    }}>Concept</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/concept/tier1")
                        setOpen()
                    }}>The Tiers</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/applications")
                        setOpen()
                    }}>Applications</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/videos")
                        setOpen()
                    }}>Videos</p>
                    <p className="font-light py-1 cursor-pointer text-lg" onClick={()=>{
                        navigate("/experience")
                        setOpen()
                    }}>Experience</p>
                </div>
            </div>
        </div>
    )
}