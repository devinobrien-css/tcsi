import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { TCSI } from "../resources/svg/tcsiSVG.library"

const SideNavTab = ({className,path,title,icon,...rest}) => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <Link className="h-full group" to={path} {...rest}>
            <div className={`capitalize my-auto p-4 text-3xl group-hover:bg-blue-100 text-tcsi-blue bg-opacity-90 transition-colors border-b-4 flex  ${className} ${path===location.pathname?" border-orange-500":"border-transparent"}`}>
                <Icon icon={icon} className="" width="30" />
                <span className="my-auto pl-2 font-teko">{title}</span>
            </div>
        </Link>
    )
}

const SideNavMultiTab = ({title,icon,path,tabs}) => {
    const [open,setOpen] = useState()
    const location = useLocation()
    let navigate = useNavigate();

    return (
        <div 
            className={`capitalize relative px-4 cursor-pointer border-b-4  ${location.pathname.includes(title)?" border-orange-500":"border-transparent"}`} 
            onClick={() => {open?setOpen():setOpen(true)}}
        >
            <div 
                className="flex h-full [&>*]:my-auto group text-tcsi-blue"
                onClick={()=>{
                    if(open){
                        navigate(tabs[0].path)
                    }
                }}    
            >   
                <Icon icon={icon} width="30"/>
                <span className="my-auto pl-2 font-teko text-3xl">{title}</span>
                <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`transition-all ${(open?"":"rotate-180")}`} />
            </div>
            <div className={`w-full overflow-y-hidden  transition-all  ${open?'h-48':'h-0'}`}>
                {tabs.map((tab,index) => <SideNavTab className={``} key={`multitab-${tab.title}-${index}`} path={tab.path} title={tab.title}/>)}
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
                className={`z-[1000] shadow-xl border h-full bg-tcsi-dark-green fixed left-0 top-0 transition-width duration-800 ${open?"w-1/3":"w-2"}`}
                onBlur={()=>{
                    setTimeout(()=>{
                        setOpen()
                    },400)
                }}
                tabindex="0"
            >
                <div 
                    className="absolute flex border-r border-t border-b bg-tcsi-dark-green cursor-pointer left-full top-14 h-10 w-4 rounded-r"
                    onClick={() => {open?setOpen():setOpen(true)}}   
                >

                    <Icon icon={"bi:chevron-bar-right"} width={40} className={`transform transition-all text-gray-800 ${open?"rotate-180":""}`}/>
                </div>

                <nav className={`text-gray-800 text-lg overflow-hidden ${open?"w-full":"w-0"}`}>
                    <TCSI className="p-4" />
                    <SideNavTab path="/about" title="about" icon="tabler:info-square" onClick={() => setOpen()}/>
                    <SideNavTab path="/panels" title="panels" icon="carbon:machine-learning-model" onClick={() => setOpen()} />
                    <SideNavTab path="/publications" title="publications" icon="ph:books-duotone" onClick={() => setOpen()}/>
                    <SideNavMultiTab path="/contributing" title="contributing" icon="ph:graph-duotone" tabs={contributionsMultiTab} />
                    <SideNavTab path="/contact" title="contact" icon="tabler:message-circle" onClick={() => setOpen()}/>
                </nav>
            </div>
        </>
    )
}
export default SideNav