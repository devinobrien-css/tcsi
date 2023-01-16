import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { TCSI } from "../resources/svg/tcsiSVG.library"

const SideNavTab = ({className,path,title,icon,...rest}) => {
    const location = useLocation()

    return (
        <Link className="h-full group" to={path} {...rest}>
            <div className={`capitalize my-auto p-4 text-3xl group-hover:bg-blue-100 bg-opacity-90 transition-colors border-b-4 flex  ${className} ${path===location.pathname?" border-orange-500":"border-transparent"}`}>
                <span className="my-auto pl-2 font-lato font-light">{title}</span>
            </div>
        </Link>
    )
}

const SideNavMultiTab = ({title,path,tabs,setNavOpen}) => {
    const [open,setOpen] = useState()
    const location = useLocation()
    let navigate = useNavigate();

    return (
        <div 
            className={`capitalize relative  transition-colors cursor-pointer border-b-4  ${location.pathname.includes(title)?" border-orange-500":"border-transparent"}`} 
            onClick={() => {open?setOpen():setOpen(true)}}
        >
            <div 
                className="p-4 w-full flex h-full [&>*]:my-auto hover:bg-blue-100"
                onClick={()=>{
                    if(open){
                        navigate(tabs[0].path)
                        setOpen()
                    }
                }}    
            >   
                <span className="my-auto pl-2 font-lato font-light text-3xl">{title}</span>
                <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`my-auto mx-2 transition-all ${(open?"":"rotate-180")}`} />
            </div>
            <div className={`px-4 w-full overflow-y-hidden  transition-all  ${open?'h-56':'h-0'}`}>
                {tabs.map((tab,index) => <SideNavTab className={``} key={`multitab-${tab.title}-${index}`} onClick={() => {
                    setOpen()
                    setNavOpen()
                }} path={tab.path} title={tab.title}/>)}
            </div>
        </div>
    )
}


const contributionsMultiTab = [
    {
        title:"Research",
        path:"/contributing/research"
    },
    {
        title:"Volunteering",
        path:"/contributing/volunteering"
    },
    {
        title:"Donations",
        path:"/contributing/donations"
    }
]

/** Side navigation bar
 * @returns a nav bar on the left side of the page
 */
 const SideNav = () => {
    const [open,setOpen] = useState()

    return (
        <>
            <div 
                className={`z-[1000] shadow-xl border h-full bg-tcsi-dark-green fixed left-0 top-0 transition-width duration-800 ${open?"w-2/3 md:w-1/3":"w-2"}`}
                // onBlur={()=>{
                //     setTimeout(()=>{
                //         setOpen()
                //     },400)
                // }}
                tabindex="0"
            >
                <div 
                    className="absolute flex border-r border-t border-b bg-tcsi-dark-green cursor-pointer left-full top-14 h-10 w-4 rounded-r"
                    onClick={() => {open?setOpen():setOpen(true)}}   
                >

                    <Icon icon={"bi:chevron-bar-right"} width={40} className={`transform transition-all text-gray-800 ${open?"rotate-180":""}`}/>
                </div>

                <nav className={` text-lg overflow-hidden ${open?"w-full":"w-0"}`}>
                    <TCSI className="p-4" />
                    <SideNavTab path="/about" title="about" icon="tabler:info-square" onClick={() => setOpen()}/>
                    <SideNavTab path="/panels" title="panels" icon="carbon:machine-learning-model" onClick={() => setOpen()} />
                    <SideNavTab path="/publications" title="publications" icon="ph:books-duotone" onClick={() => setOpen()}/>
                    <SideNavMultiTab path="/contributing" title="contributing" tabs={contributionsMultiTab} setNavOpen={setOpen}/>
                    <SideNavTab path="/contact" title="contact" icon="tabler:message-circle" onClick={() => setOpen()}/>
                </nav>
            </div>
        </>
    )
}
export default SideNav